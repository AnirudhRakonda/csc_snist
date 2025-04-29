import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Route imports
import connectDB from './db/dbConnection.js';
import authRoute from './routes/auth.route.js';
import leaderboardRoutes from './routes/leaderboard.route.js';

// Middlewares
dotenv.config(); // Loads environment variables from .env file
const app = express();

// Emulate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use('/api/auth', authRoute);
app.use('/api/leaderboard', leaderboardRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'dist')));

// For SPA routing (only match non-API routes for SPA support)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Connect to the database
(async () => {
  await connectDB();
})();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
