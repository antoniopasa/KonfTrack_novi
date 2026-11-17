
const fs = require('fs');
const pdf = require('pdf-parse');

async function validatePdf(filePath, maxPages, authorNames = []) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const pdfData = await pdf(dataBuffer);

        const warnings = [];

        
        if (maxPages && pdfData.numpages > maxPages) { // provjera broja stranica u pdfu
            return { 
                valid: false, 
                error: `Rad ima previše stranica (${pdfData.numpages}), a maksimalno dopušteno je ${maxPages}.` 
            };
        }

        
        const pdfAuthorMeta = pdfData.info?.Author ? pdfData.info.Author.toLowerCase() : ''; // provjera metapodataka
        const pdfCreatorMeta = pdfData.info?.Creator ? pdfData.info.Creator.toLowerCase() : '';

        for (const name of authorNames) {
            if (!name) continue;
            const lowerName = name.toLowerCase();
            if (pdfAuthorMeta.includes(lowerName) || pdfCreatorMeta.includes(lowerName)) {
                warnings.push(`Upozorenje: Metadatci PDF-a sadrže ime autora (${name}). Rukopis mora biti anonimiziran.`);
            }
        }

        return { valid: true, warnings, numPages: pdfData.numpages };
    } catch (err) {
        console.error('Greška pri parsiranju PDF-a:', err);
        return { valid: false, error: 'Neuspješna analiza PDF datoteke. Provjerite je li datoteka valjana.' };
    }
}

module.exports = { validatePdf };