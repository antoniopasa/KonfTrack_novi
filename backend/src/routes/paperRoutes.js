const express = require('express');
const router = express.Router();
const paperController = require('../controllers/paperController');
const upload = require('../middleware/upload');
const requireLogin = require('../middleware/authMiddleware');

// POST /api/papers - Predaja rada 
router.post('/', requireLogin, upload.single('pdfFile'), paperController.submitPaper);

// GET /api/papers/my - Dohvat vlastitih radova
router.get('/my', requireLogin, paperController.getMyPapers);

// PUT /api/papers/:id - Uređivanje rada
router.put('/:id', requireLogin, paperController.updatePaper);

// PATCH /api/papers/:id/withdraw - Povlačenje rada
router.patch('/:id/withdraw', requireLogin, paperController.withdrawPaper);

module.exports = router;