const Mood = require("../models/moodModel");
const mongoose = require("mongoose");

//@desc GET all moods
const getMoods = async (req, res) => {
  const moods = await Mood.find({}).sort({ createdAt: -1 });

  res.status(200).json(moods);
};

//@desc GET a single mood
const getMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Mood log does not exist" });
  }

  const mood = await Mood.findById(id);

  if (!mood) {
    return res.status(404).json({ error: "Mood log does not exist" });
  }

  res.status(200).json(mood);
};

//@desc CREATE a new mood
const postMood = async (req, res) => {
  const { title, description, mood, moodIntensity } = req.body;

  try {
    const createMood = await Mood.create({
      title,
      description,
      mood,
      moodIntensity,
    });

    res.status(200).json(createMood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//@desc UPDATE single mood

//@desc DELETE single mood

module.exports = {
  postMood,
  getMoods,
  getMood,
};
