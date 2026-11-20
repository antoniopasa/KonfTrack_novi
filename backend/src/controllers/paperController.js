const fs = require("fs");
const prisma = require("../config/prisma");
const { validatePdf } = require("../services/pdfService");
const { verifyDois } = require("../services/crossrefService");

const NE_MOZE_POVUCI = ["accepted", "rejected", "withdrawn", "final_submitted", "in_program"];
const MOZE_UREDITI = ["draft", "submitted"];

function obrisiDatoteku(file) {
  if (file && file.path && fs.existsSync(file.path)) fs.unlinkSync(file.path);
}

function parsirajJson(vrijednost, zadano) {
  if (!vrijednost) return zadano;
  if (typeof vrijednost !== "string") return vrijednost;
  try {
    return JSON.parse(vrijednost);
  } catch {
    return zadano;
  }
}

function prazno(v) {
  return !v || !String(v).trim();
}

function temeKonferencije(conference) {
  return (conference.topics || "")
    .split(/[,;\n]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

//Pretvara listu autora s fronta u zapise za paper_authors.
//Ako koautor s tom e-poštom već postoji u sustavu povezuje se preko user_id.
async function pripremiAutore(autori, userId) {
  const rezultat = [];
  for (const a of autori) {
    const email = (a.email || "").toLowerCase().trim();
    let povezaniId = a.isSelf ? userId : null;

    if (!povezaniId && email) {
      const postojeci = await prisma.users.findUnique({ where: { email } });
      if (postojeci) povezaniId = postojeci.id;
    }

    rezultat.push({
      user_id: povezaniId,
      invited_name: a.name || null,
      invited_email: email || null,
      is_contact_author: Boolean(a.isContactAuthor),
    });
  }
  return rezultat;
}

//dohvaća rad i provjerava da pripada korisniku (ili da je korisnik koautor, ako je dopušteno)
async function dohvatiVlastitiRad(paperId, userId, dopustiKoautora = false) {
  if (!Number.isInteger(paperId)) return { greska: 400, poruka: "Neispravan ID rada." };

  const paper = await prisma.papers.findUnique({
    where: { id: paperId },
    include: {
      conferences: true,
      paper_versions: { orderBy: { version_number: "asc" } },
      paper_authors_paper_authors_paper_idTopapers: true,
    },
  });
  if (!paper) return { greska: 404, poruka: "Rad nije pronađen." };

  const vlasnik = paper.created_by === userId;
  const koautor = paper.paper_authors_paper_authors_paper_idTopapers.some(
    (a) => a.user_id === userId,
  );
  if (!vlasnik && !(dopustiKoautora && koautor)) {
    return { greska: 403, poruka: "Nemate ovlasti za ovaj rad." };
  }
  return { paper };
}

//sprema rukopis kao verziju 1 unutar transakcije; vraća putanju stare datoteke koju treba obrisati
async function spremiRukopis(tx, paperId, file, tip) {
  const postojeca = await tx.paper_versions.findFirst({
    where: { paper_id: paperId, version_number: 1 },
  });

  if (postojeca) {
    await tx.paper_versions.update({
      where: { id: postojeca.id },
      data: {
        file_path: file ? file.path : postojeca.file_path,
        version_type: tip,
        submitted_at: new Date(),
      },
    });
    return file && postojeca.file_path !== file.path ? postojeca.file_path : null;
  }

  if (file) {
    await tx.paper_versions.create({
      data: {
        paper_id: paperId,
        version_number: 1,
        version_type: tip,
        file_path: file.path,
        submitted_at: new Date(),
      },
    });
  }
  return null;
}

//logika za spremanje nacrta i predaju rada
async function spremiRad(req, res, predaja) {
  const userId = req.userId;
  const { paperId, title, abstract, keywords, topic, conferenceId, authors, references } = req.body;

  // pomoćna funkcija: obriši prenesenu datoteku i vrati grešku
  const greska = (status, poruka) => {
    obrisiDatoteku(req.file);
    return res.status(status).json({ error: poruka });
  };

  try {
    if (prazno(title)) return greska(400, "Naslov rada je obavezan.");

    if (
      predaja &&
      (prazno(abstract) || prazno(keywords) || prazno(topic) || prazno(conferenceId))
    ) {
      return greska(
        400,
        "Za predaju su obavezni naslov, sažetak, ključne riječi, tema i konferencija.",
      );
    }

    // Postojeci nacrt koji se nadopunjuje
    let postojeci = null;
    if (paperId) {
      const r = await dohvatiVlastitiRad(Number(paperId), userId);
      if (r.greska) return greska(r.greska, r.poruka);
      postojeci = r.paper;
      if (postojeci.status !== "draft") {
        return greska(400, "Moguće je uređivati samo rad u stanju nacrta.");
      }
    }

    // Konferencija
    let conference = null;
    if (!prazno(conferenceId)) {
      const konfId = Number(conferenceId);
      if (!Number.isInteger(konfId)) return greska(400, "Neispravan ID konferencije.");
      conference = await prisma.conferences.findUnique({ where: { id: konfId } });
      if (!conference) return greska(404, "Konferencija nije pronađena.");
    }

    if (
      predaja &&
      conference.submission_deadline &&
      new Date() > new Date(conference.submission_deadline)
    ) {
      return greska(400, "Rok za predaju radova je istekao.");
    }

    if (predaja) {
      const teme = temeKonferencije(conference);
      if (teme.length && !teme.includes(topic.trim())) {
        return greska(400, "Odabrana tema ne pripada ovoj konferenciji.");
      }
    }

    const autori = parsirajJson(authors, []);
    if (!Array.isArray(autori)) return greska(400, "Neispravan popis autora.");

    const pdfWarnings = [];
    const doiWarnings = [];

    if (predaja) {
      const staraVerzija =
        postojeci && postojeci.paper_versions.find((v) => v.version_number === 1);
      const putanja = req.file ? req.file.path : staraVerzija && staraVerzija.file_path;

      if (!putanja) return greska(400, "Anonimizirani PDF rukopis je obavezan.");

      const brojKontakt = autori.filter((a) => a.isContactAuthor).length;
      if (brojKontakt !== 1) return greska(400, "Odaberite točno jednog autora za kontakt.");

      const provjera = await validatePdf(
        putanja,
        conference.max_pages || 10,
        autori.map((a) => a.name),
      );
      if (!provjera.valid) return greska(400, provjera.error);
      pdfWarnings.push(...provjera.warnings);

      const dois = parsirajJson(references, [])
        .map((r) => (typeof r === "string" ? r : r && r.doi))
        .filter(Boolean);
      for (const r of await verifyDois(dois)) {
        if (!r.exists) doiWarnings.push(r.warning);
      }
    }

    const podaci = {
      title: title.trim(),
      abstract: abstract || null,
      keywords: keywords || null,
      topic: topic || null,
      conference_id: conference ? conference.id : null,
      status: predaja ? "submitted" : "draft",
      submitted_at: predaja ? new Date() : null,
    };
    const zapisiAutora = await pripremiAutore(autori, userId);
    if (predaja && !zapisiAutora.some((a) => a.user_id === userId)) {
      return greska(400, "Korisnik koji predaje rad mora biti jedan od autora.");
    }

    let staraDatoteka = null;
    const paper = await prisma.$transaction(async (tx) => {
      let p;
      if (postojeci) {
        await tx.paper_authors.deleteMany({ where: { paper_id: postojeci.id } });
        p = await tx.papers.update({
          where: { id: postojeci.id },
          data: {
            ...podaci,
            paper_authors_paper_authors_paper_idTopapers: { create: zapisiAutora },
          },
        });
      } else {
        p = await tx.papers.create({
          data: {
            ...podaci,
            created_by: userId,
            paper_authors_paper_authors_paper_idTopapers: { create: zapisiAutora },
          },
        });
      }
      staraDatoteka = await spremiRukopis(tx, p.id, req.file, predaja ? "initial" : "draft");
      return p;
    });

    // stara datoteka briše se tek kad je baza uspješno ažurirana
    if (staraDatoteka && fs.existsSync(staraDatoteka)) fs.unlinkSync(staraDatoteka);

    return res.status(predaja || !postojeci ? 201 : 200).json({
      message: predaja ? "Rad je uspješno predan." : "Nacrt je spremljen.",
      paper: { id: paper.id, status: paper.status },
      warnings: { pdfWarnings, doiWarnings },
    });
  } catch (error) {
    console.error("Greška pri spremanju rada:", error);
    obrisiDatoteku(req.file);
    return res.status(500).json({ error: "Došlo je do greške na poslužitelju." });
  }
}

// predaja rada (novog ili postojećeg nacrta)
exports.submitPaper = (req, res) => spremiRad(req, res, true);

// spremanje nacrta
exports.saveDraft = (req, res) => spremiRad(req, res, false);

// radovi koje je korisnik predao ili na kojima je koautor
exports.getMyPapers = async (req, res) => {
  try {
    const userId = req.userId;
    const papers = await prisma.papers.findMany({
      where: {
        OR: [
          { created_by: userId },
          { paper_authors_paper_authors_paper_idTopapers: { some: { user_id: userId } } },
        ],
      },
      include: { conferences: { select: { id: true, name: true } } },
      orderBy: { id: "desc" },
    });

    return res.status(200).json({
      papers: papers.map((p) => ({
        id: p.id,
        title: p.title,
        topic: p.topic,
        status: p.status,
        submittedAt: p.submitted_at,
        conference: p.conferences,
        isOwner: p.created_by === userId,
      })),
    });
  } catch (error) {
    console.error("Greška pri dohvatu radova:", error);
    return res.status(500).json({ error: "Greška na poslužitelju." });
  }
};

// detalji rada (vlasnik ili koautor)
exports.getPaper = async (req, res) => {
  try {
    const r = await dohvatiVlastitiRad(Number(req.params.id), req.userId, true);
    if (r.greska) return res.status(r.greska).json({ error: r.poruka });
    const p = r.paper;
    const v1 = p.paper_versions.find((v) => v.version_number === 1);

    return res.json({
      paper: {
        id: p.id,
        title: p.title,
        abstract: p.abstract,
        keywords: p.keywords,
        topic: p.topic,
        conferenceId: p.conference_id,
        status: p.status,
        isOwner: p.created_by === req.userId,
        hasManuscript: Boolean(v1 && v1.file_path),
        authors: p.paper_authors_paper_authors_paper_idTopapers.map((a) => ({
          name: a.invited_name,
          email: a.invited_email,
          isContactAuthor: a.is_contact_author,
          isSelf: a.user_id === req.userId,
        })),
      },
    });
  } catch (error) {
    console.error("Greška pri dohvatu rada:", error);
    return res.status(500).json({ error: "Greška na poslužitelju." });
  }
};

//  izmjena metapodataka do isteka roka
exports.updatePaper = async (req, res) => {
  try {
    const r = await dohvatiVlastitiRad(Number(req.params.id), req.userId);
    if (r.greska) return res.status(r.greska).json({ error: r.poruka });
    const paper = r.paper;

    if (!MOZE_UREDITI.includes(paper.status)) {
      return res.status(400).json({ error: "Rad se u ovom stanju više ne može uređivati." });
    }

    if (
      paper.conferences &&
      paper.conferences.submission_deadline &&
      new Date() > new Date(paper.conferences.submission_deadline)
    ) {
      return res.status(400).json({ error: "Rok za izmjenu rada je istekao." });
    }

    const { title, abstract, keywords, topic } = req.body;
    const podaci = {};
    for (const [kljuc, vrijednost] of Object.entries({ title, abstract, keywords, topic })) {
      if (vrijednost === undefined) continue;
      if (prazno(vrijednost)) {
        return res.status(400).json({ error: `Polje "${kljuc}" ne smije biti prazno.` });
      }
      podaci[kljuc] = String(vrijednost).trim();
    }

    if (podaci.topic && paper.conferences) {
      const teme = temeKonferencije(paper.conferences);
      if (teme.length && !teme.includes(podaci.topic)) {
        return res.status(400).json({ error: "Odabrana tema ne pripada ovoj konferenciji." });
      }
    }

    const updated = await prisma.papers.update({
      where: { id: paper.id },
      data: podaci,
    });
    return res.status(200).json({ message: "Rad je uspješno ažuriran.", paper: updated });
  } catch (error) {
    console.error("Greška pri ažuriranju rada:", error);
    return res.status(500).json({ error: "Greška na poslužitelju." });
  }
};

//  povlačenje rada: dopušteno u bilo kojem trenutku prije prihvaćanja (F-011)
exports.withdrawPaper = async (req, res) => {
  try {
    const r = await dohvatiVlastitiRad(Number(req.params.id), req.userId);
    if (r.greska) return res.status(r.greska).json({ error: r.poruka });
    const paper = r.paper;

    if (NE_MOZE_POVUCI.includes(paper.status)) {
      return res.status(400).json({ error: "Rad se u ovom stanju više ne može povući." });
    }

    await prisma.papers.update({ where: { id: paper.id }, data: { status: "withdrawn" } });
    return res.status(200).json({ message: "Rad je uspješno povučen." });
  } catch (error) {
    console.error("Greška prilikom povlačenja rada:", error);
    return res.status(500).json({ error: "Došlo je do greške na poslužitelju." });
  }
};
