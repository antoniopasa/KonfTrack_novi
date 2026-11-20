const express = require("express");
const router = express.Router();
const conferenceController = require("../controllers/conferenceController");

// GET /api/conferences
// otvorene konferencije (javno, bez prijave)
router.get("/", conferenceController.getOpenConferences);

module.exports = router;
