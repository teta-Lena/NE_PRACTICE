const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/dbconfig");
const User = require("../models/users.model");

const userController = {};

userController.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password });

    res.status(201).json({ newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

userController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_KEY, {
      expiresIn: "1h",
    });

    res.json({ token, message: "Logged in successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = userController;
