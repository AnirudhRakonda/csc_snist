import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, username, password, email, branch, rollNo, year, createdAt} = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ error: "Email already exists" });

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: "Username already taken" });

        const existingrollNo = await User.findOne({ rollNo });
        if (existingrollNo) return res.status(400).json({error : "roll number already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword, email, branch, rollNo, year, createdAt });
        await newUser.save();

        res.status(201).json({ message: 'gotta new HTEAM Member' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

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

router.get("/profile", async (req, res) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access Denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(verified.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
});

export default router;