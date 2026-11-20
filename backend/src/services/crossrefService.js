// Provjera DOI oznake preko Crossref API-ja.

const DOI_REGEX = /^10\.\d{4,9}\/\S+$/i;
const TIMEOUT_MS = 8000;

function ocistiDoi(doi) {
  return String(doi)
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "");
}

async function verifyDoi(doi) {
  if (!doi) return { exists: false, status: "INVALID_FORMAT", warning: "Prazna DOI oznaka." };

  const cleanDoi = ocistiDoi(doi);
  if (!DOI_REGEX.test(cleanDoi)) {
    return {
      exists: false,
      status: "INVALID_FORMAT",
      warning: `"${doi}" nije ispravna DOI oznaka.`,
    };
  }

  try {
    const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}`, {
      headers: { "User-Agent": "KonfTrackApp/1.0 (mailto:admin@konftrack.local)" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        exists: true,
        status: "VALID",
        doi: cleanDoi,
        metadata: {
          title: data.message?.title?.[0] || "",
          publisher: data.message?.publisher || "",
          year: data.message?.issued?.["date-parts"]?.[0]?.[0] || null,
        },
      };
    }

    if (response.status === 404) {
      return {
        exists: false,
        status: "NOT_FOUND",
        warning: `DOI "${cleanDoi}" ne postoji u Crossref bazi.`,
      };
    }
  } catch {
    //timeout ili mrezna greška: pada na UNVERIFIED ispod
  }

  return {
    exists: false,
    status: "UNVERIFIED",
    warning: `DOI "${cleanDoi}" trenutačno nije moguće provjeriti (Crossref nije dostupan).`,
  };
}

//Provjerava više DOI-ja u isto vrijeme, najviše `limit` istodobno
async function verifyDois(dois, limit = 4) {
  const rezultati = new Array(dois.length);
  let sljedeci = 0;
  async function radnik() {
    while (sljedeci < dois.length) {
      const i = sljedeci++;
      rezultati[i] = await verifyDoi(dois[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, dois.length) }, radnik));
  return rezultati;
}

module.exports = { verifyDoi, verifyDois };
