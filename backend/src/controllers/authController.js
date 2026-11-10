const userModel = require("../models/userModel");

// REGISTRACIJA
exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).send("Popuni sva obavezna polja.");
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

    req.session.userId = user.id;

    res.redirect("/profile");
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
    const user = await userModel.findUserById(req.session.userId);

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

  await userModel.updateUser(req.session.userId, {
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
