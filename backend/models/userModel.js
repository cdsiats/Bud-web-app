const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// static signup method
userSchema.statics.signup = async function (email, password, username) {
  //   validation
  if (!email || !password || !username) {
    throw Error("Please fill out all fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Please enter a strong password");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, username });

  return user;
};

// static login method
userSchema.statics.login = async function (username, password) {
  //   validation
  if (!username || !password) {
    throw Error("Please fill out all fields");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("User does not exist");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
