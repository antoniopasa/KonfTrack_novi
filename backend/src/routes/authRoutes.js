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
router.get("/logout", requireLogin, authController.logout);

module.exports = router;
