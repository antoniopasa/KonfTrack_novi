const fs = require("fs");
const pdfParse = require("pdf-parse");

// Čita broj stranica i metapodatke. 
async function procitajPdf(buffer) {
  if (pdfParse.PDFParse) {
    const parser = new pdfParse.PDFParse({ data: buffer });
    try {
      const info = await parser.getInfo();
      return { numpages: info.total, info: info.info || {} };
    } finally {
      await parser.destroy();
    }
  }
  const data = await pdfParse(buffer);
  return { numpages: data.numpages, info: data.info || {} };
}

async function validatePdf(filePath, maxPages, authorNames = []) {
  try {
    const pdfData = await procitajPdf(fs.readFileSync(filePath));
    const warnings = [];

    // provjera broja stranica
    if (maxPages && pdfData.numpages > maxPages) {
      return {
        valid: false,
        error: `Rad ima previše stranica (${pdfData.numpages}), a maksimalno dopušteno je ${maxPages}.`,
      };
    }

    // provjera metapodataka 
    const meta = [pdfData.info.Author, pdfData.info.Creator, pdfData.info.Title]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    for (const name of authorNames) {
      if (name && meta.includes(name.toLowerCase())) {
        warnings.push(`Metapodaci PDF-a sadrže ime autora (${name}). Rukopis mora biti anonimiziran.`);
      }
    }

    return { valid: true, warnings, numPages: pdfData.numpages };
  } catch (err) {
    console.error("Greška pri parsiranju PDF-a:", err);
    return { valid: false, error: "Neuspješna analiza PDF datoteke. Provjerite je li datoteka valjana." };
  }
}

module.exports = { validatePdf };
