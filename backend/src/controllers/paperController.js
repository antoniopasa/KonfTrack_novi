const fs = require("fs");
const prisma = require("../config/prisma");
const { validatePdf } = require("../services/pdfService");
const { verifyDoi } = require("../services/crossrefService");


const NE_MOZE_POVUCI = ["accepted", "rejected", "withdrawn", "final_submitted", "in_program"];

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

//dohvaća rad i provjerava da pripada korisniku
async function dohvatiVlastitiRad(paperId, userId) {
  const paper = await prisma.papers.findUnique({
    where: { id: paperId },
    include: {
      conferences: true,
      paper_versions: { orderBy: { version_number: "asc" } },
      paper_authors_paper_authors_paper_idTopapers: true,
    },
  });
  if (!paper) return { greska: 404, poruka: "Rad nije pronađen." };
  if (paper.created_by !== userId) return { greska: 403, poruka: "Nemate ovlasti za ovaj rad." };
  return { paper };
}

//sprema rukopis kao verziju 1 (zamjenjuje postojeću datoteku ako je ima)
async function spremiRukopis(paperId, file, tip) {
  const postojeca = await prisma.paper_versions.findFirst({
    where: { paper_id: paperId, version_number: 1 },
  });

  if (postojeca) {
    if (file) {
      if (postojeca.file_path && fs.existsSync(postojeca.file_path)) fs.unlinkSync(postojeca.file_path);
    }
    return prisma.paper_versions.update({
      where: { id: postojeca.id },
      data: {
        file_path: file ? file.path : postojeca.file_path,
        version_type: tip,
        submitted_at: new Date(),
      },
    });
  }

  if (!file) return null;

  return prisma.paper_versions.create({
    data: {
      paper_id: paperId,
      version_number: 1,
      version_type: tip,
      file_path: file.path,
      submitted_at: new Date(),
    },
  });
}

//logika za spremanje nacrta i predaju rada
async function spremiRad(req, res, predaja) {
  const userId = req.userId;
  const { paperId, title, abstract, keywords, topic, conferenceId, authors, references } = req.body;

  try {
    if (!title || !title.trim()) {
      obrisiDatoteku(req.file);
      return res.status(400).json({ error: "Naslov rada je obavezan." });
    }

    if (predaja && (!abstract || !conferenceId)) {
      obrisiDatoteku(req.file);
      return res.status(400).json({ error: "Naslov, sažetak i konferencija su obavezni za predaju." });
    }

    // Postojeci nacrt koji se nadopunjuje
    let postojeci = null;
    if (paperId) {
      const r = await dohvatiVlastitiRad(parseInt(paperId), userId);
      if (r.greska) {
        obrisiDatoteku(req.file);
        return res.status(r.greska).json({ error: r.poruka });
      }
      postojeci = r.paper;
      if (postojeci.status !== "draft") {
        obrisiDatoteku(req.file);
        return res.status(400).json({ error: "Moguće je uređivati samo rad u stanju nacrta." });
      }
    }

    // Konferencija
    let conference = null;
    if (conferenceId) {
      conference = await prisma.conferences.findUnique({ where: { id: parseInt(conferenceId) } });
      if (!conference) {
        obrisiDatoteku(req.file);
        return res.status(404).json({ error: "Konferencija nije pronađena." });
      }
    }

    if (predaja && conference.submission_deadline && new Date() > new Date(conference.submission_deadline)) {
      obrisiDatoteku(req.file);
      return res.status(400).json({ error: "Rok za predaju radova je istekao." });
    }

    const autori = parsirajJson(authors, []);
    const pdfWarnings = [];
    const doiWarnings = [];

    if (predaja) {
      
      const staraVerzija = postojeci && postojeci.paper_versions.find((v) => v.version_number === 1);
      const putanja = req.file ? req.file.path : staraVerzija && staraVerzija.file_path;

      if (!putanja) {
        return res.status(400).json({ error: "Anonimizirani PDF rukopis je obavezan." });
      }

      if (!autori.some((a) => a.isContactAuthor)) {
        obrisiDatoteku(req.file);
        return res.status(400).json({ error: "Odaberite autora za kontakt." });
      }

      const provjera = await validatePdf(
        putanja,
        conference.max_pages || 10,
        autori.map((a) => a.name),
      );
      if (!provjera.valid) {
        obrisiDatoteku(req.file);
        return res.status(400).json({ error: provjera.error });
      }
      pdfWarnings.push(...provjera.warnings);

      for (const ref of parsirajJson(references, [])) {
        const doi = typeof ref === "string" ? ref : ref.doi;
        if (!doi) continue;
        const r = await verifyDoi(doi);
        if (!r.exists) doiWarnings.push(r.warning);
      }
    }

    const podaci = {
      title: title.trim(),
      abstract: abstract || null,
      keywords: keywords || null,
      topic: topic || null,
      conference_id: conferenceId ? parseInt(conferenceId) : null,
      status: predaja ? "submitted" : "draft",
      submitted_at: predaja ? new Date() : null,
    };
    const zapisiAutora = await pripremiAutore(autori, userId);

    const paper = await prisma.$transaction(async (tx) => {
      if (postojeci) {
        await tx.paper_authors.deleteMany({ where: { paper_id: postojeci.id } });
        return tx.papers.update({
          where: { id: postojeci.id },
          data: {
            ...podaci,
            paper_authors_paper_authors_paper_idTopapers: { create: zapisiAutora },
          },
        });
      }
      return tx.papers.create({
        data: {
          ...podaci,
          created_by: userId,
          paper_authors_paper_authors_paper_idTopapers: { create: zapisiAutora },
        },
      });
    });

    await spremiRukopis(paper.id, req.file, predaja ? "initial" : "draft");

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

// detalji vlastitog rada (za nastavak uređivanja nacrta)
exports.getPaper = async (req, res) => {
  try {
    const r = await dohvatiVlastitiRad(parseInt(req.params.id), req.userId);
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
    const r = await dohvatiVlastitiRad(parseInt(req.params.id), req.userId);
    if (r.greska) return res.status(r.greska).json({ error: r.poruka });
    const paper = r.paper;

    if (paper.conferences && paper.conferences.submission_deadline && new Date() > new Date(paper.conferences.submission_deadline)) {
      return res.status(400).json({ error: "Rok za izmjenu rada je istekao." });
    }

    const { title, abstract, keywords, topic } = req.body;
    const updated = await prisma.papers.update({
      where: { id: paper.id },
      data: { title, abstract, keywords, topic },
    });
    return res.status(200).json({ message: "Rad je uspješno ažuriran.", paper: updated });
  } catch (error) {
    console.error("Greška pri ažuriranju rada:", error);
    return res.status(500).json({ error: "Greška na poslužitelju." });
  }
};

//  povlačenje rada
exports.withdrawPaper = async (req, res) => {
  try {
    const r = await dohvatiVlastitiRad(parseInt(req.params.id), req.userId);
    if (r.greska) return res.status(r.greska).json({ error: r.poruka });
    const paper = r.paper;

    if (NE_MOZE_POVUCI.includes(paper.status)) {
      return res.status(400).json({ error: "Rad se u ovom stanju više ne može povući." });
    }

    if (paper.conferences && paper.conferences.submission_deadline && new Date() > new Date(paper.conferences.submission_deadline)) {
      return res.status(400).json({ error: "Rok za ovu konferenciju je istekao, rad se više ne može povući." });
    }

    await prisma.papers.update({ where: { id: paper.id }, data: { status: "withdrawn" } });
    return res.status(200).json({ message: "Rad je uspješno povučen." });
  } catch (error) {
    console.error("Greška prilikom povlačenja rada:", error);
    return res.status(500).json({ error: "Došlo je do greške na poslužitelju." });
  }
};
