const prisma = require("./src/config/prisma");

const konferencije = [
  {
    id: 1,
    name: "Hrvatska konferencija o računarstvu 2027",
    location: "Zagreb, FER",
    start_date: new Date("2027-05-20"),
    end_date: new Date("2027-05-22"),
    topics: "Strojno učenje, Obrada signala, Programsko inženjerstvo",
    submission_deadline: new Date("2027-02-15T23:59:00+01:00"),
    review_deadline: new Date("2027-03-20T23:59:00+01:00"),
    notification_deadline: new Date("2027-03-31T23:59:00+02:00"),
    final_deadline: new Date("2027-04-20T23:59:00+02:00"),
    max_pages: 10,
    status: "approved",
  },
  {
    id: 2,
    name: "Simpozij o računalnom vidu 2027",
    location: "Split",
    start_date: new Date("2027-09-10"),
    end_date: new Date("2027-09-11"),
    topics: "Računalni vid, Duboko učenje, Robotika",
    submission_deadline: new Date("2027-06-01T23:59:00+02:00"),
    review_deadline: new Date("2027-07-01T23:59:00+02:00"),
    notification_deadline: new Date("2027-07-10T23:59:00+02:00"),
    final_deadline: new Date("2027-08-01T23:59:00+02:00"),
    max_pages: 8,
    status: "approved",
  },
];

(async () => {
  try {
    for (const k of konferencije) {
      // update s istim podacima: ponovno pokretanje popravlja i postojeće zapise
      const { id, ...podaci } = k;
      await prisma.conferences.upsert({
        where: { id },
        update: podaci,
        create: k,
      });
    }

    // Pomakni sekvencu da kasnije automatsko kreiranje ne pukne na duplikatu
    await prisma.$executeRaw`SELECT setval(pg_get_serial_sequence('conferences','id'), (SELECT MAX(id) FROM conferences))`;

    console.log(`Seed konferencija: ${konferencije.length} zapisa.`);
  } catch (e) {
    console.error("Greška:", e.message);
  } finally {
    await prisma.$disconnect();
  }
})();
