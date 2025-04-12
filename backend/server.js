import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import hash from 'hash.js';

import connectDB from './db/dbConnection.js';  
import authRoute from './routes/auth.route.js';
import User from './models/user.model.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);


app.get("/", (req, res) => {
    res.send("Server is running...");
});

const hashedSecret = hash.sha256().update(process.env.JWT_SECRET || "").digest('hex');
console.log(hashedSecret);


(async () => {
        await connectDB();
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); 