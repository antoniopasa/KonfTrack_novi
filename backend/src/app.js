const env = require("./config/env");

const express = require("express");
const session = require("express-session");
const path = require("path");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const orcidRoutes = require("./routes/orcidRoutes");
const paperRoutes = require("./routes/paperRoutes");

const app = express();

const PORT = env.PORT;

// Ako je aplikacija u produkciji iza reverse proxyja
if (env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// EJS konfiguracija
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../../frontend/src/pages"));

// Statičke datoteke (CSS, slike, favicon)
app.use(express.static(path.resolve(__dirname, "../../frontend/src")));
app.use(express.static(path.resolve(__dirname, "../../frontend/src/pages")));

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
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: env.COOKIE_SECURE,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

// Početna stranica
app.get("/", (req, res) => {
  res.render("neregistriraniKorisnik/index");
});

const mockSekcije = require("./data/mockSekcije");

app.get("/program", (req, res) => {
  res.render("neregistriraniKorisnik/program", {
    sekcije: mockSekcije,
  });
});

// Auth rute
app.use("/", authRoutes);

// ORCID rute
app.use("/auth", orcidRoutes);
app.use("/api/papers", paperRoutes);
// Rute za radove
//app.use("/auth", paperRoutes);
// Pokretanje servera
app.listen(PORT, () => {
  console.log(`KonfTrack radi na http://localhost:${PORT}`);
});

const healthRoutes = require("./routes/healthRoutes");
// ...
app.use("/health", healthRoutes);
