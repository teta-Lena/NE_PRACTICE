const bcrypt = require("bcryptjs");
const validator = require("../utils/user.validation");
const tokenService = require("../services/tokenService");
const db = require("../config/database"); // Assuming you have a separate file for MySQL database connection

const userSchema = require("../models/user.model");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = { email, password };
    const userexists = await userSchema.findUserByEmail(user.email);
    if (userexists) {
      return res
        .status(404)
        .send({ message: "User with such credentials already exists" });
    }

    const noofusercreated = await userSchema.createUser(user);
    return res.status(201).json({ noofusercreated });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "All inputs are required" });
    }

    const user = await userSchema.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).json({ error: "Invalid credentials" });
    // }

    const accessToken = await tokenService.generateAuthTokens(user);

    return res.status(200).json({
      success: true,
      token: accessToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" + error });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const getUserQuery = "SELECT * FROM users WHERE id = ?";
    const user = await db.query(getUserQuery, [userId]);

    if (user.length === 0) {
      return res.status(400).send("User doesn't exist");
    }

    return res.status(200).json({
      user: user[0],
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" + error });
  }
};
