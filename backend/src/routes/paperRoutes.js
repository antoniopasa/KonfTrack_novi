const express = require('express');
const router = express.Router();
const paperController = require('../controllers/paperController');
const upload = require('../middleware/upload');

// POST /api/papers - Predaja rada 
router.post('/', upload.single('pdfFile'), paperController.submitPaper);

// GET /api/papers/my - Dohvat vlastitih radova
router.get('/my', paperController.getMyPapers);

// PUT /api/papers/:id - Uređivanje rada
router.put('/:id', paperController.updatePaper);

// PATCH /api/papers/:id/withdraw - Povlačenje rada
router.patch('/:id/withdraw', paperController.withdrawPaper);

module.exports = router;