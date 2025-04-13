import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
    date: { type: Date, required: true, unique: true },
    users: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            score: { type: Number, required: true },
        }
    ]
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

export default Leaderboard;
