import express from 'express';
import { generateChaosPanic, escalateChaos } from '../services/excuseEngine.js';
import { storage } from '../services/storage.js';

const router = express.Router();

/**
 * GET /api/chaos/panic
 * Returns dynamic chaos telemetry & panic alibi
 */
router.get('/panic', async (req, res) => {
  try {
    const chaosData = generateChaosPanic();
    await storage.incrementStat('totalChaosReleased');
    res.json({ success: true, data: chaosData });
  } catch (err) {
    console.error('Error generating chaos panic:', err);
    res.status(500).json({ success: false, error: 'Failed to trigger panic telemetry' });
  }
});

/**
 * POST /api/chaos/escalate
 * Returns maximum chaos state (99% cooked, unhinged)
 */
router.post('/escalate', async (req, res) => {
  try {
    const escalatedData = escalateChaos();
    await storage.incrementStat('totalChaosReleased');
    res.json({ success: true, data: escalatedData });
  } catch (err) {
    console.error('Error escalating chaos:', err);
    res.status(500).json({ success: false, error: 'Failed to escalate chaos' });
  }
});

export default router;
