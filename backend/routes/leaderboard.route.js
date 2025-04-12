
import express from "express";
import { createLeaderboard, getLeaderboard } from "../controllers/leaderboard.controller.js";

const router = express.Router();

// GET leaderboard by date
// Example: GET /api/leaderboard?date=2025-04-13
router.get("/", getLeaderboard);

// POST to create a new leaderboard
// Example body: { date: "2025-04-13", users: [{ userId, score }] }
router.post("/", createLeaderboard);

export default router;
