import express from 'express';
import { storage } from '../services/storage.js';

const router = express.Router();

const CATEGORIES_META = [
  { id: "late", title: "Running Late", icon: "timer", bg: "bg-secondary-container", rotate: "rotate-[-2deg]" },
  { id: "ghosting", title: "Ghosting", icon: "visibility_off", bg: "bg-primary-fixed", rotate: "rotate-[1deg]" },
  { id: "work", title: "Work", icon: "work", bg: "bg-tertiary-container", rotate: "rotate-[-1deg]" },
  { id: "school", title: "School", icon: "school", bg: "bg-secondary-container", rotate: "rotate-[2deg]" },
  { id: "social", title: "Social Plans", icon: "groups", bg: "bg-primary-fixed", rotate: "rotate-[-1.5deg]" },
  { id: "emergency", title: "Emergency", icon: "warning", bg: "bg-error-container", rotate: "rotate-[1.5deg]" }
];

/**
 * GET /api/categories
 * Returns categories with alibi counts from store
 */
router.get('/', async (req, res) => {
  try {
    const hof = await storage.getHallOfFame();
    const categoriesWithCount = CATEGORIES_META.map(cat => {
      const count = hof.filter(h => h.category?.toLowerCase() === cat.title.toLowerCase()).length;
      return { ...cat, alibiCount: count };
    });

    res.json({ success: true, data: categoriesWithCount });
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve categories' });
  }
});

export default router;
