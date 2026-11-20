const API = "";

const form = document.getElementById("predajaForm");
const rezultat = document.getElementById("rezultat");
const fileInput = document.getElementById("rukopis");
const dropText = fileInput.parentElement.querySelector("span");
const dropTekstPocetni = dropText.textContent;

const konfSelect = document.getElementById("konferencija");
const konfInfo = document.getElementById("konf-info");
const temaSelect = document.getElementById("tema");
const kontaktSelect = document.getElementById("kontakt");
const koautorIme = document.getElementById("koautor-ime");
const koautorEmail = document.getElementById("koautor-email");
const popisKoautora = document.getElementById("popisKoautora");

let konferencije = [];
let koautori = []; // [{ name, email }]

//pomoćne funkcije za prikaz

function opcija(vrijednost, tekst) {
  const o = document.createElement("option");
  o.value = vrijednost;
  o.textContent = tekst;
  return o;
}

function redak(naziv, vrijednost) {
  const p = document.createElement("p");
  const b = document.createElement("strong");
  b.textContent = naziv + ": ";
  p.appendChild(b);
  p.appendChild(document.createTextNode(vrijednost));
  return p;
}

function prikaziKarticu(naslov, redci, poveznica) {
  rezultat.innerHTML = "";
  const kartica = document.createElement("div");
  kartica.className = "card";

  const h = document.createElement("h3");
  h.textContent = naslov;
  kartica.appendChild(h);

  for (const r of redci) kartica.appendChild(redak(r[0], r[1]));

  if (poveznica) {
    const a = document.createElement("a");
    a.href = "/korisnik/moji-radovi";
    a.className = "btn btn-primary";
    a.textContent = "Pogledaj moje radove";
    kartica.appendChild(a);
  }

  rezultat.appendChild(kartica);
  kartica.scrollIntoView({ behavior: "smooth" });
}

function formatDatuma(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("hr-HR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

//konferencije i teme

async function ucitajKonferencije() {
  try {
    const res = await fetch(API + "/api/conferences", {
      credentials: "include",
    });
    konferencije = await res.json();
  } catch {
    konferencije = [];
  }

  konfSelect.innerHTML = "";
  if (!Array.isArray(konferencije) || konferencije.length === 0) {
    konfSelect.appendChild(opcija("", "Trenutno nema otvorenih konferencija"));
    konfSelect.disabled = true;
    return;
  }

  konfSelect.appendChild(opcija("", "Odaberite konferenciju"));
  for (const k of konferencije) konfSelect.appendChild(opcija(k.id, k.name));
}

function osvjeziTeme() {
  const k = konferencije.find((x) => String(x.id) === konfSelect.value);

  temaSelect.innerHTML = "";
  if (!k) {
    temaSelect.appendChild(opcija("", "Najprije odaberite konferenciju"));
    temaSelect.disabled = true;
    konfInfo.textContent = "";
    return;
  }

  temaSelect.appendChild(opcija("", "Odaberite temu"));
  for (const t of k.topics) temaSelect.appendChild(opcija(t, t));
  temaSelect.disabled = false;

  konfInfo.textContent =
    (k.location ? k.location + " · " : "") +
    "Rok za predaju: " +
    formatDatuma(k.submissionDeadline) +
    (k.maxPages ? " · najviše " + k.maxPages + " stranica" : "");
}

konfSelect.addEventListener("change", osvjeziTeme);

//koautori i autor za kontakt

function osvjeziKoautore() {
  popisKoautora.innerHTML = "";

  if (koautori.length === 0) {
    const prazno = document.createElement("div");
    prazno.className = "list-item muted";
    prazno.textContent = "Još nema dodanih koautora.";
    popisKoautora.appendChild(prazno);
  }

  koautori.forEach((a, i) => {
    const red = document.createElement("div");
    red.className = "list-item";
    red.textContent = a.name + " (" + a.email + ") ";

    const ukloni = document.createElement("button");
    ukloni.type = "button";
    ukloni.className = "btn btn-secondary";
    ukloni.textContent = "Ukloni";
    ukloni.addEventListener("click", () => {
      koautori.splice(i, 1);
      osvjeziKoautore();
    });

    red.appendChild(ukloni);
    popisKoautora.appendChild(red);
  });

  //autor za kontakt: 0 = prijavljeni korisnik, 1..n = koautori
  const odabrano = kontaktSelect.value;
  kontaktSelect.innerHTML = "";
  kontaktSelect.appendChild(opcija("0", form.dataset.ime + " (ja)"));
  koautori.forEach((a, i) =>
    kontaktSelect.appendChild(opcija(String(i + 1), a.name)),
  );
  kontaktSelect.value = Number(odabrano) <= koautori.length ? odabrano : "0";
}

document.getElementById("dodajKoautora").addEventListener("click", () => {
  const name = koautorIme.value.trim();
  const email = koautorEmail.value.trim().toLowerCase();

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    prikaziKarticu("Koautor nije dodan", [
      ["Greška", "Unesite ime i ispravnu e-poštu."],
    ]);
    return;
  }
  if (koautori.some((a) => a.email === email) || email === form.dataset.email) {
    prikaziKarticu("Koautor nije dodan", [
      ["Greška", "Taj autor je već na popisu."],
    ]);
    return;
  }

  koautori.push({ name, email });
  koautorIme.value = "";
  koautorEmail.value = "";
  osvjeziKoautore();
});

//slanje

fileInput.addEventListener("change", function () {
  dropText.textContent = fileInput.files[0]
    ? fileInput.files[0].name
    : dropTekstPocetni;
});

function sastaviPodatke() {
  const kontakt = Number(kontaktSelect.value);

  const autori = [
    {
      name: form.dataset.ime,
      email: form.dataset.email,
      isSelf: true, // bitno za ORCID korisnike koji nemaju e-poštu
      isContactAuthor: kontakt === 0,
    },
    ...koautori.map((a, i) => ({
      name: a.name,
      email: a.email,
      isContactAuthor: kontakt === i + 1,
    })),
  ];

  const reference = document
    .getElementById("reference")
    .value.split("\n")
    .map((r) => r.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, ""))
    .filter(Boolean);

  const fd = new FormData();
  fd.append("title", document.getElementById("naslov").value);
  fd.append("abstract", document.getElementById("sazetak").value);
  fd.append("conferenceId", konfSelect.value);
  fd.append("keywords", document.getElementById("kljucne").value);
  fd.append("topic", temaSelect.value);
  fd.append("authors", JSON.stringify(autori));
  fd.append("references", JSON.stringify(reference));
  if (fileInput.files[0]) fd.append("pdfFile", fileInput.files[0]);
  return fd;
}

async function posalji(predaja) {
  if (predaja && !fileInput.files[0]) {
    prikaziKarticu("Nedostaje datoteka", [["Greška", "Odaberi PDF datoteku."]]);
    return;
  }

  const gumbi = form.querySelectorAll("button");
  gumbi.forEach((g) => (g.disabled = true));

  try {
    const res = await fetch(
      API + (predaja ? "/api/papers" : "/api/papers/draft"),
      {
        method: "POST",
        credentials: "include",
        body: sastaviPodatke(),
      },
    );
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      prikaziKarticu(
        predaja ? "Predaja nije uspjela" : "Nacrt nije spremljen",
        [["Razlog", data.error || data.message || "Greška " + res.status]],
      );
      return;
    }

    const redci = [
      ["Naslov", document.getElementById("naslov").value],
      ["Konferencija", konfSelect.options[konfSelect.selectedIndex].text],
      ["Tema", temaSelect.value || "—"],
      ["Koautori", koautori.map((a) => a.name).join(", ") || "—"],
    ];
    if (data.paper && data.paper.status)
      redci.push(["Status", data.paper.status]);

    const upozorenja = data.warnings || {};
    for (const w of upozorenja.pdfWarnings || [])
      redci.push(["Upozorenje (PDF)", w]);
    for (const w of upozorenja.doiWarnings || [])
      redci.push(["Upozorenje (DOI)", w]);

    prikaziKarticu(data.message || "Spremljeno.", redci, true);

    if (predaja) {
      form.reset();
      koautori = [];
      osvjeziKoautore();
      osvjeziTeme();
      dropText.textContent = dropTekstPocetni;
    }
  } catch {
    prikaziKarticu("Slanje nije uspjelo", [
      ["Razlog", "Nema veze s poslužiteljem."],
    ]);
  } finally {
    gumbi.forEach((g) => (g.disabled = false));
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  posalji(true);
});
document
  .getElementById("spremiNacrt")
  .addEventListener("click", () => posalji(false));

//pokretanje
osvjeziKoautore();
ucitajKonferencije().then(osvjeziTeme);
