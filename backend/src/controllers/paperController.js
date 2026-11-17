const {PrismaClient} = require('@prisma/client');
const prisma= new PrismaClient();
const fs = require('fs');
const { validatePdf, verifyDoi } = require('../utils/paperValidator');

exports.submitPaper= async(req, res)=>{
    try{
        const{title, abstract, keywords, topic, conferenceId, authors, references}=req.body;
        const userId = req.userId;
       

        if(!title || !abstract || !conferenceId ){
            if (req.file) fs.unlinkSync(req.file.path);
            return res.status(400).json({error: 'Naslov, sazetak i konferencija su obavezni!'});
        }
        if(!req.file){
            return res.status(400).json({error:'Anonimizirani PDF rukopis je obavezan! '});
        }

        const conference=await prisma.conference.findUnique({where:{id: parseInt(conferenceId)}});

        if (!conference) {
            fs.unlinkSync(req.file.path);
            return res.status(404).json({ error: 'Konferencija nije pronađena.' });
        }

        if(conference && conference.submission_deadline && new Date() > new Date(conference.submission_deadline)){
          if (req.file) fs.unlinkSync(req.file.path);
          return res.status(400).json({error:'Rok za predaju radova je istekao.'});
        }
        const parsedAuthors = typeof authors === 'string' ? JSON.parse(authors): (authors || []);
        const authorNames = parsedAuthors.map(a => a.name || a.invitedName);

        const maxPages = conference.max_pages || 10;
        const pdfValidation = await validatePdf(req.file.path, maxPages, authorNames);

        if (!pdfValidation.valid) {
            fs.unlinkSync(req.file.path); 
            return res.status(400).json({ error: pdfValidation.error });
        }

        const parsedReferences = typeof references === 'string' ? JSON.parse(references) : (references || []);
        const doiWarnings = [];

        for (const ref of parsedReferences) {
            const doiString = typeof ref === 'string' ? ref : ref.doi;
            if (doiString) {
                const doiCheck = await verifyDoi(doiString);
                if (!doiCheck.exists) {
                    doiWarnings.push(doiCheck.warning);
                }
            }
        }

        const newPaper=await prisma.paper.create({
            data:{
                title,
                abstract,
                keywords,
                topic,
                conferenceId: parseInt(conferenceId),
                created_by:userId,
                status:'predan',
                submittedAt:new Date(),
                authors: {
                    create: parsedAuthors ? parsedAuthors.map(author=> ({
                        userId: author.userId ? parseInt(author.userId): null,
                        invitedName: author.name || null,
                        invitedEmail: author.email || null,
                        isContactAuthor: author.isContactAuthor || false,
                    })) : []
                },
                versions:{
                    create:{
                        versionNumber:1,
                        versionType: 'initial',
                        filePath:req.file.path,
                        submittedAt:new Date()
                    }
                }
            },
            include:{
                authors:true,
                versions:true
            }
        });
        return res.status(201).json({
          message: 'Rad uspjesno predan!',
          paper: newPaper,
          warnings: {
            pdfWarnings: pdfValidation.warnings,
            doiWarnings: doiWarnings
          }
        });
    }catch (error){
        console.error('Greska pri predaji rada.', error);
        if (req.file && fs.existsSync(req.file.path)){
          fs.unlinkSync(req.file.path);
        }
        return res.status(500).json({eror:'Doslo je do greske na posluzitelju.'});
    }
};

exports.getMyPapers = async (req, res) => {
  try {
    const userId = req.userId;

    const papers = await prisma.paper.findMany({
      where: { created_by: userId }, 
      include: { 
        conference: true, 
        authors: true, 
        versions: true 
      }
    });

    return res.status(200).json({ papers });
  } catch (error) {
    console.error('Greška pri dohvatu radova:', error);
    return res.status(500).json({ error: 'Greška na poslužitelju.' });
  }
};


exports.updatePaper = async (req, res) => {
  try {
    const paperId = parseInt(req.params.id);
    const { title, abstract, keywords, topic } = req.body;
    const userId = req.userId;

    const paper = await prisma.paper.findUnique({ where: { id: paperId }, include: { conference: true } });
    if (!paper) return res.status(404).json({ error: 'Rad nije pronaden.' });

    // Provjera vlasništva
    if (paper.created_by !== userId) {
      return res.status(403).json({ error: 'Nemate ovlasti uredivati ovaj rad.' });
    }

    // Provjera rokova
    if (paper.conference && paper.conference.submission_deadline && new Date() > new Date(paper.conference.submission_deadline)) {
      return res.status(400).json({ error: 'Rok za izmjenu rada je istekao.' });
    }

    const updatedPaper = await prisma.paper.update({
      where: { id: paperId },
      data: { title, abstract, keywords, topic }
    });
    return res.status(200).json({ message: 'Rad je uspjesno azuriran.', paper: updatedPaper });
  } catch (error) {
    console.error('Greška pri ažuriranju rada:', error);
    return res.status(500).json({ error: 'Greška na poslužitelju.' });
  }
};
exports.withdrawPaper = async (req, res) => {
  try {
    const paperId = parseInt(req.params.id);
    const userId = req.userId;

    const paper = await prisma.paper.findUnique({
      where: { id: paperId },
      include: { conference: true }
    });

    if (!paper) {
      return res.status(404).json({ error: 'Rad nije pronađen.' });
    }

    if (paper.created_by !== userId) {
      return res.status(403).json({ error: 'Nemate dopuštenje za povlačenje tuđeg rada.' });
    }

    if (paper.status === 'accepted' || paper.status === 'rejected') {
      return res.status(400).json({ 
        error: `Rad se više ne može povući jer mu je status: ${paper.status}.` 
      });
    }

    if (paper.conference && paper.conference.submission_deadline) {
      const deadline = new Date(paper.conference.submission_deadline);
      if (new Date() > deadline) {
        return res.status(400).json({ 
          error: 'Rok za ovu konferenciju je istekao, rad se više ne može povući.' 
        });
      }
    }

    const updatedPaper = await prisma.paper.update({
      where: { id: paperId },
      data: { status: 'withdrawn' }
    });

    return res.status(200).json({ 
      message: 'Rad je uspješno povučen.', 
      paper: updatedPaper 
    });

  } catch (error) {
    console.error('Greška prilikom povlačenja rada:', error);
    return res.status(500).json({ error: 'Došlo je do greške na poslužitelju.' });
  }
}; 