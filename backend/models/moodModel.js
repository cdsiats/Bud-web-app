const mongoose = require("mongoose");

const moodSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: ["Happy", "Sad", "Angry", "Bored", "Anxious", "Stressed"],
      required: true,
    },
    moodIntensity: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mood", moodSchema);
