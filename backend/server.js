import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import excusesRouter from './routes/excuses.js';
import chaosRouter from './routes/chaos.js';
import hallOfFameRouter from './routes/hallOfFame.js';
import archiveRouter from './routes/archive.js';
import categoriesRouter from './routes/categories.js';
import { storage } from './services/storage.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ensure storage is initialized on startup
await storage.init();

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Cozy Chaos Excuse Generator API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/excuses', excusesRouter);
app.use('/api/chaos', chaosRouter);
app.use('/api/hall-of-fame', hallOfFameRouter);
app.use('/api/archive', archiveRouter);
app.use('/api/categories', categoriesRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Endpoint ${req.method} ${req.originalUrl} not found`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error occurred in Cozy Chaos API'
  });
});

app.listen(PORT, () => {
  console.log(`✨ Cozy Chaos Backend is running at http://localhost:${PORT}`);
  console.log(`🩺 Health check available at http://localhost:${PORT}/api/health`);
});
