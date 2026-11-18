const express = require("express");
const router = express.Router();
const paperController = require("../controllers/paperController");
const upload = require("../middleware/upload");
const requireLogin = require("../middleware/authMiddleware");

//upload PDF-a
function uploadPdf(req, res, next) {
  upload.single("pdfFile")(req, res, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    next();
  });
}

// POST /api/papers - Predaja rada
router.post("/", requireLogin, uploadPdf, paperController.submitPaper);

// POST /api/papers/draft - Spremanje nacrta
router.post("/draft", requireLogin, uploadPdf, paperController.saveDraft);

// GET /api/papers/my - Dohvat vlastitih radova
router.get("/my", requireLogin, paperController.getMyPapers);

// GET /api/papers/:id - Detalji vlastitog rada
router.get("/:id", requireLogin, paperController.getPaper);

// PUT /api/papers/:id - Uređivanje rada
router.put("/:id", requireLogin, paperController.updatePaper);

// PATCH /api/papers/:id/withdraw - Povlačenje rada
router.patch("/:id/withdraw", requireLogin, paperController.withdrawPaper);

module.exports = router;
