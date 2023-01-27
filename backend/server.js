const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const moodRoutes = require("./routes/moodRoutes");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/loggerMiddleware");
const connectDB = require("./config/db");

// express app
const app = express();

// cross origin resource sharing
app.use(cors());

// log paths and  http method
app.use(logger);
// parse json files
app.use(express.json());

// mood route
app.use("/api/moods", moodRoutes);
// user route
app.use("/api/user", userRoutes);

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
