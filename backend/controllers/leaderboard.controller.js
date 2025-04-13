
import Leaderboard from "../models/leaderboard.model.js";

export const getLeaderboard = async (req, res) => {
    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ message: "Date query parameter is required." });
        }

        // Ensure date is in the correct "YYYY-MM-DD" format
        const formattedDate = new Date(date).toISOString().split('T')[0];

        const leaderboard = await Leaderboard.findOne({
            date: { $eq: formattedDate }, // Match the formatted date string
        }).populate("users.userId", "username name branch year rollNo");

        if (!leaderboard) {
            return res.status(404).json({ message: "No leaderboard found for this date." });
        }

        const sortedUsers = leaderboard.users
            .sort((a, b) => b.score - a.score)
            .map((entry, index) => ({
                rank: index + 1,
                name: entry.userId.name,
                username: entry.userId.username,
                branch: entry.userId.branch,
                rollNo: entry.userId.rollNo,
                score: entry.score,
            }));

        res.status(200).json({
            date: formattedDate,
            leaderboard: sortedUsers,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};



export const createLeaderboard = async (req, res) => {
    try {

        console.log("helo");
        const { date, users } = req.body;

        console.log(date, users);

        if (!date || !users || !Array.isArray(users)) {
            return res.status(400).json({ message: "Date and users array are required." });
        }

        // Convert date to "YYYY-MM-DD" format (without time)
        const formattedDate = new Date(date).toISOString().split('T')[0];

        // Prevent duplicate leaderboard for the same date
        const existing = await Leaderboard.findOne({ date: formattedDate });
        if (existing) {
            return res.status(400).json({ message: "Leaderboard already exists for this date." });
        }

        const leaderboard = new Leaderboard({
            date: formattedDate, // Store date in "YYYY-MM-DD" format
            users: users.map(user => ({
                userId: user.userId,
                score: user.score,
            })),
        });

        await leaderboard.save();

        res.status(201).json({ message: "Leaderboard created successfully", leaderboard });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


// {
//     "date": "2025-04-13",
//         "users": [
//             { "userId": "661a1b2c3d4e5f6789012345", "score": 80 },
//             { "userId": "661a1b2c3d4e5f6789012346", "score": 75 },
//             { "userId": "661a1b2c3d4e5f6789012347", "score": 90 }
//         ]
// }
// request json be like 