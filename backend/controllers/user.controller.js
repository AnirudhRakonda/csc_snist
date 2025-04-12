export const updateUserScore = async (userId, score) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        // Update total quizzes attempted and total score
        user.totalQuizzesAttempted += 1;  // Increment number of quizzes attempted
        user.totalScore += score;  // Add the score of the current quiz to the total score

        await user.save();

        return user;
    } catch (err) {
        console.error(err.message);
        throw new Error("Error updating user score");
    }
};
