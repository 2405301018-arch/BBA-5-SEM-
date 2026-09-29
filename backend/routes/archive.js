import express from 'express';
import { storage } from '../services/storage.js';

const router = express.Router();

/**
 * GET /api/archive
 * Returns user's saved excuses
 */
router.get('/', async (req, res) => {
  try {
    const items = await storage.getArchive();
    res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    console.error('Error fetching archive:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve archive' });
  }
});

/**
 * POST /api/archive
 * Body: { text, situation, recipient, believability, ref }
 */
router.post('/', async (req, res) => {
  try {
    const { text, situation, recipient, believability, ref } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ success: false, error: 'Excuse text is required' });
    }

    const saved = await storage.addArchive({
      text: text.trim(),
      situation,
      recipient,
      believability,
      ref
    });

    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error('Error saving to archive:', err);
    res.status(500).json({ success: false, error: 'Failed to save excuse' });
  }
});

/**
 * DELETE /api/archive/:id
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await storage.deleteArchive(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Excuse not found in archive' });
    }
    res.json({ success: true, message: 'Excuse removed from archive' });
  } catch (err) {
    console.error('Error deleting from archive:', err);
    res.status(500).json({ success: false, error: 'Failed to delete excuse' });
  }
});

export default router;
