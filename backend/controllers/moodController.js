const Mood = require("../models/moodModel");
const mongoose = require("mongoose");

//@desc GET all moods
const getMoods = async (req, res) => {
  const moods = await Mood.find({ user_id: req.user._id }).sort({
    createdAt: -1,
  });

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

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!mood) {
    emptyFields.push("mood");
  }
  if (!moodIntensity) {
    emptyFields.push("moodIntensity");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_id = req.user.id;
    const createMood = await Mood.create({
      title,
      description,
      mood,
      moodIntensity,
      user_id,
    });

    res.status(200).json(createMood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//@desc UPDATE single mood
const updateMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Mood log does not exist" });
  }

  const mood = await Mood.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!mood) {
    return res.status(404), json({ error: "Mood log does not exist" });
  }

  res.status(200).json(mood);
};

//@desc DELETE single mood
const deleteMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Mood log does not exist" });
  }

  const mood = await Mood.findOneAndDelete({ _id: id });

  if (!mood) {
    return res.status(404).json({ error: "Mood log does not exist" });
  }

  res.status(200).json(mood);
};

module.exports = {
  postMood,
  getMoods,
  getMood,
  deleteMood,
  updateMood,
};
