const prisma = require("./src/config/prisma");

(async () => {
  try {
    await prisma.conferences.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: "Konferencija A",
        submission_deadline: new Date("2030-12-31"),
        max_pages: 10,
      },
    });

    // Pomakni sekvencu da kasnije automatsko kreiranje ne pukne na duplikatu
    await prisma.$executeRaw`SELECT setval(pg_get_serial_sequence('conferences','id'), (SELECT MAX(id) FROM conferences))`;

    console.log("Konferencija 1 postoji.");
  } catch (e) {
    console.error("Greška:", e.message);
  } finally {
    await prisma.$disconnect();
  }
})();