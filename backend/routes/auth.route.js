import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import authenticateJWT from '../middlewares/auth.middleware.js';  // Import JWT middleware

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, username, password, email, branch, rollNo, year, createdAt } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ error: "Email already exists" });

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: "Username already taken" });

        const existingRollNo = await User.findOne({ rollNo });
        if (existingRollNo) return res.status(400).json({ error: "Roll number already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword, email, branch, rollNo, year, createdAt });
        await newUser.save();

        res.status(201).json({ message: 'New member added to HTEAM' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password"); // Ensure password is selected
        if (!user) return res.status(404).json({ error: "No such user" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Incorrect password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get the profile of the logged-in user
router.get("/profile", authenticateJWT, async (req, res) => {  // Protect the profile route with JWT authentication
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Unable to fetch user profile" });
    }
});

export default router;
