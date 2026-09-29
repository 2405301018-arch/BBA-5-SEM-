import express from 'express';
import { generateExcuse } from '../services/excuseEngine.js';
import { storage } from '../services/storage.js';

const router = express.Router();

/**
 * POST /api/excuses/generate
 * Body: { situation, believability, tone, recipient }
 */
router.post('/generate', async (req, res) => {
  try {
    const { situation, believability, tone, recipient } = req.body;
    const excuse = generateExcuse({ situation, believability, tone, recipient });
    await storage.incrementStat('totalGenerated');
    res.json({ success: true, data: excuse });
  } catch (err) {
    console.error('Error generating excuse:', err);
    res.status(500).json({ success: false, error: 'Failed to generate excuse' });
  }
});

export default router;
