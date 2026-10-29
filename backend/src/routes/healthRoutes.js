const { Router } = require("express");
const { getHealth } = require("../controllers/healthController");

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Provjera radi li server
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server radi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 uptime:
 *                   type: number
 *                   example: 12.34
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get("/", getHealth);

module.exports = router;
