const express = require("express");
const router = express.Router();
const {
  postMood,
  getMoods,
  getMood,
} = require("../controllers/moodController");

// GET all moods
router.get("/", getMoods);

// GET a single mood
router.get("/:id", getMood);

// POST a new mood
router.post("/", postMood);

// DELETE a mood
router.delete("/:id", (req, res) => {
  res.json({ msg: `Delete a mood with an id of ${req.params.id}` });
});

// UPDATE a new mood
router.put("/:id", (req, res) => {
  res.json({ msg: "Update a mood" });
});

module.exports = router;
