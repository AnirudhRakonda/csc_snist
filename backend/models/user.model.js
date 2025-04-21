import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, // Store hashed password
        branch: { type: String, required: true }, // Branch (e.g., CSE, ECE, etc.)
        rollNo: { type: String, required: true, unique: true }, // Roll number
        year: { type: String, required: true }, // Year (1st, 2nd, 3rd, etc.)
        transactionImage: { type: String, required: true }, // URL of the payment screenshot
        totalQuizzesAttempted: { type: Number, default: 0 }, // Total quizzes attempted
        totalScore: { type: Number, default: 0 }, // Total score across all quizzes
    }
);

const User = mongoose.model('User', userSchema);
export default User;
