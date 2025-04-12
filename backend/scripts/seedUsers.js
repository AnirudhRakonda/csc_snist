import dotenv from "dotenv";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import connectDB from "../db/dbConnection.js";

dotenv.config();

const generateFakeUser = async () => {
  const name = faker.person.fullName();
  const username = faker.internet.username({ firstName: name.split(" ")[0] });
  const email = faker.internet.email({ firstName: name.split(" ")[0] });
  const password = await bcrypt.hash("password123", 10); // Hashed password
  const branch = faker.helpers.arrayElement(["CSE", "ECE", "EEE", "MECH", "CIVIL"]);
  const rollNo = faker.string.alphanumeric({ length: 6, casing: "upper" });
  const year = faker.helpers.arrayElement(["1", "2", "3", "4"]);
  const createdAt = new Date();

  return { name, username, email, password, branch, rollNo, year, createdAt };
};

const seedUsers = async (count = 10) => {
  await connectDB(); // Connect to DB

  for (let i = 0; i < count; i++) {
    const userData = await generateFakeUser();

    try {
      const existingUser = await User.findOne({ $or: [{ email: userData.email }, { username: userData.username }, { rollNo: userData.rollNo }] });
      if (existingUser) {
        console.warn(`⚠️ Skipped (duplicate): ${userData.username}`);
        continue;
      }

      const newUser = new User(userData);
      await newUser.save();
      console.log(`✅ Created user: ${userData.username}`);
    } catch (err) {
      console.error(`❌ Error creating user ${userData.username}: ${err.message}`);
    }
  }

  mongoose.disconnect();
};

seedUsers(20);
