import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Route imports
import connectDB from './db/dbConnection.js';
import authRoute from './routes/auth.route.js';
import leaderboardRoutes from './routes/leaderboard.route.js';

// Middlewares
dotenv.config(); // Loads environment variables from .env file
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes setup
app.use('/api/auth', authRoute);
app.use('/api/leaderboard', leaderboardRoutes);

// Test route
app.get('/', (req, res) => res.send('Server is running...'));

// Connect to the database
(async () => {
  await connectDB();
})();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
