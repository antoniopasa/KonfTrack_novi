
const axios = require('axios');

async function verifyDoi(doi) {
    if (!doi) return { exists: false };
    try {
        const cleanDoi = doi.replace(/https?:\/\/doi\.org\//, '').trim();
        
        const response = await axios.get(`https://api.crossref.org/works/${cleanDoi}`, {
            headers: { 
                'User-Agent': 'KonfTrackApp/1.0 (mailto:admin@konftrack.local)' 
            }
        });

        if (response.status === 200 && response.data?.message) {
            return {
                exists: true,
                metadata: {
                    title: response.data.message.title?.[0] || '',
                    publisher: response.data.message.publisher || ''
                }
            };
        }
    } catch (error) {
        return { exists: false, warning: `DOI "${doi}" ne postoji ili nije važeći u Crossref bazi.` };
    }
    return { exists: false, warning: `DOI "${doi}" nije pronađen.` };
}

module.exports = { verifyDoi };
