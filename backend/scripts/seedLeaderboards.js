import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import User from "../models/user.model.js";
import Leaderboard from "../models/leaderboard.model.js";
import connectDB from "../db/dbConnection.js";

dotenv.config();

const seedMultipleLeaderboards = async () => {
  await connectDB();

  try {
    const users = await User.find();

    if (users.length === 0) {
      console.log("No users found. Please seed users first.");
      return;
    }

    const today = new Date();

    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i); // go back by i days
      const dateOnly = date.toISOString().split("T")[0];

      const alreadyExists = await Leaderboard.findOne({ date: dateOnly });
      if (alreadyExists) {
        console.log(`❌ Leaderboard already exists for ${dateOnly}`);
        continue;
      }

      const leaderboardData = {
        date: dateOnly,
        users: [],
      };

      const selectedUsers = faker.helpers.shuffle(users).slice(0, Math.min(10, users.length));
      selectedUsers.forEach((user) => {
        leaderboardData.users.push({
          userId: user._id,
          score: faker.number.int({ min: 50, max: 500 }),
        });
      });

      await Leaderboard.create(leaderboardData);
      console.log(`✅ Leaderboard created for ${dateOnly}`);
    }

  } catch (err) {
    console.error("❌ Error seeding leaderboards:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedMultipleLeaderboards();
