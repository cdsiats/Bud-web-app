const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const moodRoutes = require("./routes/moodRoutes");
const logger = require("./middleware/loggerMiddleware");
const connectDB = require("./config/db");

// express app
const app = express();

// cross origin
app.use(cors());

// log paths and  http method
app.use(logger);
// parse json files
app.use(express.json());

// routes
app.use("/api/moods", moodRoutes);

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
