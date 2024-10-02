const express = require("express");
const Reel = require("../models/reelModel");
const router = express.Router();

// Get all reels
router.get("/reels", async (req, res) => {
  try {
    const reels = await Reel.find().populate("user", "username");
    res.json(reels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
