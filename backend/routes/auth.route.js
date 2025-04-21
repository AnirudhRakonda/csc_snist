import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import authenticateJWT from '../middlewares/auth.middleware.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const router = express.Router();

// Configure multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'transactions', // The folder in Cloudinary where images will be stored
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'], // Allowed image formats
    transformation: [{ width: 1000, crop: "limit" }], // Optional image transformation
  },
});

// Set up multer with Cloudinary storage
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB file size limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Registration route with Cloudinary file upload
router.post('/register', upload.single('transactionImage'), async (req, res) => {
    try {
      const { name, username, password, email, branch, rollNo, year } = req.body;
  
      console.log("Request body:", req.body);
      console.log("File object:", req.file);
      console.log("req.files :", req.files);
  
      // Validate required fields
      if (!name || !username || !password || !email || !branch || !rollNo || !year) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Check if transaction image was uploaded
      if (!req.file) {
        return res.status(400).json({ error: "Payment screenshot is required" });
      }
  
      // Check for existing user with same email
      const existingEmail = await User.findOne({ email });
      if (existingEmail) return res.status(400).json({ error: "Email already exists" });
  
      // Check for existing user with same username
      const existingUser = await User.findOne({ username });
      if (existingUser) return res.status(400).json({ error: "Username already taken" });
  
      // Check for existing user with same roll number
      const existingRollNo = await User.findOne({ rollNo });
      if (existingRollNo) return res.status(400).json({ error: "Roll number already exists" });
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // With Cloudinary, the URL is typically in req.file.path or req.file.secure_url
      const imageUrl = req.file.path || req.file.secure_url;
      
      if (!imageUrl) {
        console.error("Image URL not found in file object:", req.file);
        return res.status(500).json({ error: "Failed to upload image" });
      }
  
      // Create new user with transaction image URL from Cloudinary
      const newUser = new User({
        name,
        username,
        password: hashedPassword,
        email,
        branch,
        rollNo,
        year,
        transactionImage: imageUrl
      });
  
      console.log("New user object:", newUser);
  
      await newUser.save();
  
      res.status(201).json({ message: 'Registration successful! You can now login.' });
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({ error: err.message });
    }
  });

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ error: "No such user" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect password" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Return user data without sensitive information
    res.json({
      token,
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
        branch: user.branch,
        rollNo: user.rollNo,
        year: user.year
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/profile", authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch user profile" });
  }
});

router.post('/adminlogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = "sundar@gmail.com";
    const adminPassword = "imthegoogleceo";

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ error: "Invalid admin credentials" });
    }

    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, message: "Admin login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin route to get all users
router.get('/admin/users', authenticateJWT, async (req, res) => {
  try {
    // Verify admin role
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: "Not authorized" });
    }

    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;