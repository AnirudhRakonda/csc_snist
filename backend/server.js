import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import hash from 'hash.js';

//route imports
import connectDB from './db/dbConnection.js';  
import authRoute from './routes/auth.route.js';
import leaderboardRoutes from "./routes/leaderboard.route.js";

//middlewares 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/leaderboard", leaderboardRoutes);
app.get("/", (req, res) => res.send("Server is running..."));

//hashing JWT secret
const hashedSecret = hash.sha256().update(process.env.JWT_SECRET || "").digest('hex');
// console.log(hashedSecret);

//connecting db
(async () => {
        await connectDB();
})();

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); 