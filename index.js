const express = require("express");
const path = require("path");
const app = express();
const PORT = 6767;

const pagesDir = path.join(__dirname, "frontend", "src", "pages");

app.set("view engine", "ejs");
app.set("views", pagesDir);

app.use(express.static(pagesDir));

app.use("/assets", express.static(path.join(__dirname, "frontend", "src", "assets")));

app.use("/korisnik", (req, res, next) => {
  res.locals.korisnik = {
    ime: "Ivan",
    prezime: "Horvat",
    ustanova: "FER, Sveučilište u Zagrebu",
  };
  next();
});

const mockRadovi = [
  { naslov: "Primjer rada 1", konferencija: "Konferencija 1", tema: "Tema 1", datum: "—", stanje: "Nacrt", stanjeKljuc: "nacrt" },
  { naslov: "Primjer rada 2", konferencija: "Konferencija 1", tema: "Tema 2", datum: "—", stanje: "U recenziji", stanjeKljuc: "recenzija" },
  { naslov: "Primjer rada 3", konferencija: "Konferencija 2", tema: "Tema 3", datum: "—", stanje: "Prihvaćen", stanjeKljuc: "prihvacen" },
];

const mockSekcije = [
  { naziv: "Sekcija 1: Tema 1", dvorana: "—", termin: "—", predsjedavajuci: "—" },
  { naziv: "Sekcija 2: Tema 2", dvorana: "—", termin: "—", predsjedavajuci: "—" },
];

app.use("/assets", express.static(path.join(__dirname, "frontend", "src", "assets")));

app.get("/", (req, res) => {
  res.render("neregistriraniKorisnik/index", {});
});

app.get("/program", (req, res) => {
  res.render("neregistriraniKorisnik/program", { sekcije: mockSekcije });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/odjava", (req, res) => {
  res.redirect("/");
});

app.get("/korisnik", (req, res) => {
  res.render("registriraniKorisnik/pocetna");
});

app.get("/korisnik/moji-radovi", (req, res) => {
  res.render("registriraniKorisnik/moji-radovi", { radovi: mockRadovi });
});

app.get("/korisnik/predaja", (req, res) => {
  res.render("registriraniKorisnik/predaja");
});

app.get("/korisnik/kontakt", (req, res) => {
  res.render("registriraniKorisnik/kontakt");
});

app.listen(PORT, () => {
  console.log(`Server je pokrenut na http://localhost:${PORT}`);
});