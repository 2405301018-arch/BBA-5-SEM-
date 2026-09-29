import express from 'express';
import { storage } from '../services/storage.js';

const router = express.Router();

/**
 * GET /api/hall-of-fame?category=...
 * Fetch community legends
 */
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const items = await storage.getHallOfFame(category);
    res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    console.error('Error fetching Hall of Fame:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve Hall of Fame' });
  }
});

/**
 * POST /api/hall-of-fame
 * Body: { title, description, category }
 */
router.post('/', async (req, res) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, error: 'Title/Excuse text is required' });
    }

    const created = await storage.addHallOfFame({
      title: title.trim(),
      description: description ? description.trim() : null,
      category: category || 'Work'
    });

    res.status(201).json({ success: true, data: created });
  } catch (err) {
    console.error('Error adding to Hall of Fame:', err);
    res.status(500).json({ success: false, error: 'Failed to submit excuse' });
  }
});

export default router;
