const express = require("express");
const router = express.Router();
const {
  postMood,
  getMoods,
  getMood,
  deleteMood,
  updateMood,
} = require("../controllers/moodController");
const requireAuth = require("../middleware/requireAuth");

// auth middleware for all routes
router.use(requireAuth);

router.route("/").get(getMoods).post(postMood);
router.route("/:id").put(updateMood).delete(deleteMood).get(getMood);

module.exports = router;
