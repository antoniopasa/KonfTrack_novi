const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const requireLogin = require("../middleware/authMiddleware");

// LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", authController.login);

// REGISTRACIJA
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", authController.register);

// PROFIL
router.get("/profile", requireLogin, authController.profile);

router.post("/profile", requireLogin, authController.updateProfile);

// ODJAVA
router.get(["/logout", "/odjava"], requireLogin, authController.logout);
//Time ruta odgovara na oba naziva pa sidebaar.ejs ne treba dirati

/**
 * @openapi
 * /api/auth/token:
 *   post:
 *     summary: Prijava e-poštom i lozinkom, vraća JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Pristupni token
 *       401:
 *         description: Pogrešni podaci
 */
router.post("/api/auth/token", authController.token);

/**
 * @openapi
 * /api/me:
 *   get:
 *     summary: Podaci o prijavljenom korisniku
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profil korisnika
 *       401:
 *         description: Nedostaje ili je neispravan token
 */
router.get("/api/me", requireLogin, authController.me);
// PREDAJA RADA
router.get("/korisnik/predaja", requireLogin, authController.predaja);
router.get("/korisnik/moji-radovi", requireLogin, authController.mojiRadovi);
router.get("/korisnik", requireLogin, authController.profile);
router.get("/korisnik/program", requireLogin, authController.program);
module.exports = router;
