function postavi(id, tekst) {
  const el = document.getElementById(id);
  if (el) el.textContent = tekst;
}

function datum(v) {
  return v ? new Date(v).toLocaleDateString("hr-HR") : "—";
}

async function ucitaj() {
  const res = await fetch("/api/papers/my?t=" + Date.now(), {
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) return;

  const data = await res.json();
  const radovi = data.papers || [];

  // Filtriramo samo radove koji nisu nacrt ("draft") niti povučeni ("withdrawn")
  const aktivniRadovi = radovi.filter(function (p) {
    return p.status !== "draft" && p.status !== "withdrawn";
  });

  const recenzija = ["u recenziji", "under_review", "in_review"];
  const prihvaceno = ["accepted", "prihvacen", "prihvaćen"];

  postavi("statUkupno", aktivniRadovi.length);

  postavi(
    "statRecenzija",
    aktivniRadovi.filter(function (p) {
      return recenzija.includes(p.status);
    }).length,
  );

  postavi(
    "statPrihvaceno",
    aktivniRadovi.filter(function (p) {
      return prihvaceno.includes(p.status);
    }).length,
  );

  const sKonf = aktivniRadovi.filter(function (p) {
    return p.conference;
  });
  if (sKonf.length > 0) {
    const k = sKonf[sKonf.length - 1].conference;
    postavi("datumPredaja", datum(k.submission_deadline));
    postavi("datumRecenzije", datum(k.review_deadline));
    postavi("datumObavijest", datum(k.notification_deadline));
    postavi("datumKonacne", datum(k.final_deadline));
  }
}

ucitaj();
