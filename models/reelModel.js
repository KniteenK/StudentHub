const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reel = mongoose.model("Reel", reelSchema);

module.exports = Reel;
