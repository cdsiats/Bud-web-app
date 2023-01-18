const express = require("express");
const router = express.Router();
const {
  postMood,
  getMoods,
  getMood,
  deleteMood,
  updateMood,
} = require("../controllers/moodController");

router.route("/").get(getMoods).post(postMood);
router.route("/:id").put(updateMood).delete(deleteMood).get(getMood);

module.exports = router;
