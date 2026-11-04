const express = require("express");
const crypto = require("crypto");

const router = express.Router();

const orcidConfig = require("../config/orcid");
const orcidService = require("../services/orcidService");
const userModel = require("../models/userModel");

// KORISNIK KLIKNE NA ORCID LOGIN
router.get("/orcid", (req, res) => {
  const state = crypto.randomBytes(32).toString("hex");

  req.session.orcidState = state;

  const params = new URLSearchParams({
    client_id: orcidConfig.clientId,
    response_type: "code",
    scope: "/authenticate",
    redirect_uri: orcidConfig.callbackUrl,
    state,
  });

  res.redirect(`${orcidConfig.baseUrl}/oauth/authorize?${params.toString()}`);
});

// ORCID VRAĆA KORISNIKA
router.get("/orcid/callback", async (req, res) => {
  try {
    const { code, state, error } = req.query;

    if (error) {
      return res.status(400).send("ORCID prijava je otkazana.");
    }

    if (!code || !state || state !== req.session.orcidState) {
      return res.status(400).send("Neispravna ORCID autorizacija.");
    }

    delete req.session.orcidState;

    // Dobivanje access tokena
    const tokenData = await orcidService.getAccessToken(code);

    const orcidId = tokenData.orcid;

    if (!orcidId) {
      return res.status(401).send("ORCID identifikator nije pronađen.");
    }

    // Dohvaćanje imena korisnika
    const fullName = tokenData.name || "";
    const nameParts = fullName.trim().split(/\s+/).filter(Boolean);

    const firstName = nameParts.shift() || "";
    const lastName = nameParts.join(" ");

    // Pronađi ili kreiraj korisnika
    const user = await userModel.findOrCreateOrcidUser(orcidId, firstName, lastName);

    // Kreiranje sesije
    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).send("Greška sesije.");
      }

      req.session.userId = user.id;

      res.redirect("/profile");
    });
  } catch (error) {
    console.error("ORCID error:", error);

    res.status(500).send("Došlo je do greške tijekom ORCID prijave.");
  }
});

module.exports = router;
