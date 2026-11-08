/*
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const healthRoutes = require("./routes/healthRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs.json", (req, res) => res.json(swaggerSpec));

app.use("/health", healthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
*/
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const path = require("path");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const orcidRoutes = require("./routes/orcidRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// EJS konfiguracija
app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "../../frontend/src/pages"));

// Omogućavanje CSS-a, slika i ostalih statičkih datoteka
app.use(express.static(path.resolve(__dirname, "../../frontend/src")));
app.use(express.static(path.resolve(__dirname, "../../frontend/src/pages")));
//gornji pokužuje slike i favicone a donji css


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sigurnosna zaglavlja
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'"],
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
        "img-src": ["'self'", "data:"],
      },
    },
  }),
);

// Sesije
app.use(
  session({
    name: "konftrack.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

// Početna stranica
app.get("/", (req, res) => {
  res.render("neregistriraniKorisnik/index");
});


// Privremeni primjer podataka dok program ne dođe iz baze
const mockSekcije = [
  { naziv: "Sekcija 1: Tema 1", dvorana: "—", termin: "—", predsjedavajuci: "—" },
  { naziv: "Sekcija 2: Tema 2", dvorana: "—", termin: "—", predsjedavajuci: "—" },
];

app.get("/program", (req, res) => {
  res.render("neregistriraniKorisnik/program", { sekcije: mockSekcije });
});




// Auth rute
app.use("/", authRoutes);

// ORCID rute
app.use("/auth", orcidRoutes);

// Pokretanje servera
app.listen(PORT, () => {
  console.log(`KonfTrack radi na http://localhost:${PORT}`);
});
