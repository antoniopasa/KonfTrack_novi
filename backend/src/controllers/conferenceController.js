const prisma = require("../config/prisma");

//Teme su u bazi spremljene kao jedan tekst pa ih rastavlja u listu
function razdvojiTeme(topics) {
  return (topics || "")
    .split(/[,;\n]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

// GET /api/conferences
// konferencije kojima rok za predaju još nije istekao
exports.getOpenConferences = async (req, res) => {
  try {
    const konferencije = await prisma.conferences.findMany({
      where: {
        OR: [{ submission_deadline: null }, { submission_deadline: { gt: new Date() } }],
      },
      orderBy: { id: "asc" },
    });

    res.json(
      konferencije.map((k) => ({
        id: k.id,
        name: k.name,
        location: k.location,
        startDate: k.start_date,
        endDate: k.end_date,
        topics: razdvojiTeme(k.topics),
        submissionDeadline: k.submission_deadline,
        maxPages: k.max_pages,
      })),
    );
  } catch (error) {
    console.error("Greška pri dohvatu konferencija:", error);
    res.status(500).json({ error: "Greška pri dohvatu konferencija." });
  }
};
