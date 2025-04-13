import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [
        { type: String, required: true }
    ],
    answer: { type: Number, required: true }
});

const contestSchema = new mongoose.Schema({
    contestNumber: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    questions: [questionSchema],
    totalQuestions: { type: Number, required: true },
});

const Contest = mongoose.model('Contest', contestSchema);

export default Contest;
