import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import authenticateJWT from '../middlewares/auth.middleware.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Directory setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Verify Cloudinary configuration
console.log("Cloudinary Config Status:", 
  process.env.CLOUDINARY_CLOUD_NAME ? "✓ Cloud name" : "✗ Missing cloud name",
  process.env.CLOUDINARY_API_KEY ? "✓ API key" : "✗ Missing API key",
  process.env.CLOUDINARY_API_SECRET ? "✓ API secret" : "✗ Missing API secret"
);

const router = express.Router();

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Set up local storage
const localStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Use local storage with stricter limits
const upload = multer({ 
  storage: localStorage,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Utility function to optimize image before Cloudinary upload
const optimizeImageForUpload = (filePath) => {
  // In a real app, you might use sharp or another library to resize/compress
  // For now, we'll just return the original path
  return filePath;
};

// Registration route with file upload handling
router.post('/register', upload.single('transactionImage'), async (req, res) => {
  try {
    const { name, username, password, email, branch, rollNo, year } = req.body;

    console.log("Request body:", req.body);
    console.log("File received:", req.file ? "Yes" : "No");
    
    if (req.file) {
      console.log("File details:", {
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        path: req.file.path,
        size: req.file.size
      });
    }

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

    let imageUrl = null;
    
    // Try uploading to Cloudinary with timeout and retry logic
    try {
      // Set timeout options for Cloudinary upload
      const optimizedImagePath = optimizeImageForUpload(req.file.path);
      
      // Try Cloudinary upload with 10 second timeout (default is 60)
      const uploadPromise = cloudinary.uploader.upload(optimizedImagePath, {
        folder: 'transactions',
        resource_type: 'image',
        timeout: 10000, // 10 seconds timeout
        transformation: [
          { width: 800, crop: "limit" }, // Resize image to reduce file size
          { quality: "auto" } // Auto-optimize quality
        ]
      });
      
      const result = await uploadPromise;
      console.log("Cloudinary upload successful:", result.secure_url);
      imageUrl = result.secure_url;
      
      // Remove local file after successful upload
      fs.unlinkSync(req.file.path);
    } catch (cloudinaryError) {
      console.error("Cloudinary upload error:", cloudinaryError);
      
      // Fallback: If Cloudinary upload fails, proceed with local storage URL
      // In a real app, you would implement more robust fallback or retry logic
      console.log("Using fallback local storage for image");
      
      // Create a relative path for the local image
      const publicPath = `/uploads/${path.basename(req.file.path)}`;
      imageUrl = publicPath;
    }
    
    if (!imageUrl) {
      return res.status(500).json({ error: "Failed to process image" });
    }

    // Create new user with image URL
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

    await newUser.save();
    
    console.log("User registered successfully:", newUser.username);
    res.status(201).json({ message: 'Registration successful! You can now login.' });
    
  } catch (err) {
    console.error("Registration error:", err);
    
    // Clean up local file if it exists and there was an error
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (cleanupError) {
        console.error("Error cleaning up file:", cleanupError);
      }
    }
    
    res.status(500).json({ error: err.message || "Registration failed" });
  }
});

// To serve the uploaded files if stored locally
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

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
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        branch: user.branch,
        rollNo: user.rollNo,
        year: user.year
      }
    });
  } catch (err) {
    console.error("Login error:", err);
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

export default router;