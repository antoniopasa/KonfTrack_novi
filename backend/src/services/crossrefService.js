//Provjera DOI oznake preko Crossref API-ja 
async function verifyDoi(doi) {
  if (!doi) return { exists: false };
  const cleanDoi = doi.replace(/https?:\/\/(dx\.)?doi\.org\//, "").trim();

  try {
    const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}`, {
      headers: { "User-Agent": "KonfTrackApp/1.0 (mailto:admin@konftrack.local)" },
    });

    if (response.ok) {
      const data = await response.json();
      return {
        exists: true,
        metadata: {
          title: data.message?.title?.[0] || "",
          publisher: data.message?.publisher || "",
        },
      };
    }
  } catch {
    
  }
  return { exists: false, warning: `DOI "${doi}" ne postoji ili nije važeći u Crossref bazi.` };
}

module.exports = { verifyDoi };
