const userModel = require("../models/userModel");
const mockSekcije = require("../data/mockSekcije");
const { signToken } = require("../services/tokenService");

// REGISTRACIJA
exports.register = async (req, res) => {
  try {
    const { email, ime, prezime, lozinka, lozinka2 } = req.body;

    const firstName = ime;
    const lastName = prezime;
    const password = lozinka;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).send("Popuni sva obavezna polja.");
    }

    if (password !== lozinka2) {
      return res.status(400).send("Lozinke se ne podudaraju.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).send("Unesi ispravnu e-mail adresu.");
    }

    if (password.length < 8) {
      return res.status(400).send("Lozinka mora imati barem 8 znakova.");
    }

    const user = await userModel.createUser({
      email,
      password,
      firstName,
      lastName,
    });

    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).send("Greška prilikom registracije.");
      }
      req.session.userId = user.id;
      req.session.token = signToken(user);
      res.redirect("/profile");
    });
  } catch (error) {
    if (error.message === "EMAIL_EXISTS") {
      return res.status(409).send("Korisnik s tom e-mail adresom već postoji.");
    }

    console.error(error);
    res.status(500).send("Greška prilikom registracije.");
  }
};

// PRIJAVA
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Unesi e-mail i lozinku.");
    }

    const user = await userModel.findUserByEmail(email);

    const validPassword = await userModel.verifyPassword(user, password);

    if (!validPassword) {
      return res.status(401).send("Pogrešan e-mail ili lozinka.");
    }

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).send("Greška prilikom prijave.");
      }

      req.session.userId = user.id;
      req.session.token = signToken(user);
      res.redirect("/profile");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Greška prilikom prijave.");
  }
};

// PRIKAZ PROFILA
const conferenceModel = require("../models/conferenceModel");

exports.profile = async (req, res) => {
  try {
    const user = await userModel.findUserById(req.userId);

    if (!user) {
      return res.redirect("/login");
    }

    const conferences = await conferenceModel.getUserConferences(user.id);

    const safeUser = { ...user };
    delete safeUser.passwordHash;

    const korisnikZaPrikaz = {
      id: safeUser.id,
      ime: safeUser.firstName,
      prezime: safeUser.lastName,
      ustanova: safeUser.institution,
      email: safeUser.email,
      orcidId: safeUser.orcidId,
    };

    return res.render("registriraniKorisnik/pocetna", {
      korisnik: korisnikZaPrikaz,
      conferences,
    });
  } catch (error) {
    console.error("Greška pri učitavanju profila:", error);
    return res.status(500).send("Greška prilikom učitavanja profila.");
  }
};
async function dohvatiKorisnika(req) {
  const user = await userModel.findUserById(req.userId);
  if (!user) return null;
  return {
    id: user.id,
    ime: user.firstName,
    prezime: user.lastName,
    ustanova: user.institution,
    email: user.email,
    orcidId: user.orcidId,
  };
}

exports.predaja = async (req, res) => {
  const korisnik = await dohvatiKorisnika(req);
  if (!korisnik) return res.redirect("/login");
  res.render("registriraniKorisnik/predaja", { korisnik });
};
exports.mojiRadovi = async (req, res) => {
  const korisnik = await dohvatiKorisnika(req);
  if (!korisnik) return res.redirect("/login");
  res.render("registriraniKorisnik/moji-radovi", { korisnik, radovi: [] });
};
exports.program = async (req, res) => {
  const korisnik = await dohvatiKorisnika(req);
  if (!korisnik) return res.redirect("/login");

  res.render("registriraniKorisnik/program", { korisnik, sekcije: mockSekcije });
};
// UREĐIVANJE PROFILA
exports.updateProfile = async (req, res) => {
  const { firstName, lastName, institution, expertise } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).send("Ime i prezime su obavezni.");
  }

  const expertiseArray = expertise
    ? expertise
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  await userModel.updateUser(req.userId, {
    firstName,
    lastName,
    institution,
    expertise: expertiseArray,
  });

  res.redirect("/profile");
};

// ODJAVA
exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).send("Greška prilikom odjave.");
    }

    res.clearCookie("konftrack.sid");
    res.redirect("/");
  });
};

// IZDAVANJE TOKENA (OAuth 2.0 stil, password grant za vlastiti API)
exports.token = async (req, res) => {
  const { email, password } = req.body;

  const user = email ? await userModel.findUserByEmail(email) : null;

  if (!user || !(await userModel.verifyPassword(user, password))) {
    return res.status(401).json({ error: "Pogrešan e-mail ili lozinka." });
  }

  res.json({
    access_token: signToken(user),
    token_type: "Bearer",
    expires_in: 86400,
  });
};

// PROFIL KAO JSON (za provjeru tokena)
exports.me = async (req, res) => {
  const user = await userModel.findUserById(req.userId);
  if (!user) return res.status(404).json({ error: "Korisnik nije pronađen." });

  res.json({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    institution: user.institution,
    email: user.email,
    orcidId: user.orcidId,
    expertise: user.expertise,
  });
};
