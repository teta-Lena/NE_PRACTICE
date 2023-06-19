const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const validator = require("../utils/user.validation");
const tokenService = require("../services/tokenService");

exports.createUser = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const { error } = validator.validate(req.body);
    if (error) {
      console.log(error.message);
      return res.status(400).send(error);
    }

    if (!(email && password && fname && lname)) {
      return res.status(400).send("All inputs must be filled");
    }

    const userexists = await User.findOne({ email });
    if (userexists) {
      return res
        .status(409)
        .send("User already exists. Login or use another email");
    }

    const salt = await bcrypt.genSalt(10);

    const encryptedpass = await bcrypt.hash(password, salt);

    const user = await User.create({
      fname,
      lname,
      email: email.toLowerCase(),
      password: encryptedpass,
      //add userrole if u really have it
    });

    // const token = jwt.sign({ userid: user._id, email }, process.env.TOKEN_KEY, {
    //   expiresIn: "2h",
    // });

    // user.token = token;
    user.save();
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).send({ message: `Error ${e}` });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const filters = {};
    const options = {
      limit: req.query.limit || 1,
      page: req.query.page || 1,
    };
    // filters first param
    const users = await User.paginate(filters, options);
    if (users) {
      res.status(200).json({
        success: true,
        users,
      });
    } else {
      console.log("Failed to fetch all users");
    }
  } catch (e) {
    return res.status(500).send({ message: `Error encountered: ${e}` });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json("All inputs are required");
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const accesstoken = await tokenService.generateAuthTokens(user);

    return res.status(200).json({
      success: true,
      token: accesstoken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" + error });
  }
};
exports.getUserProfile = async (req, res) => {
  try {
   const user = req.user;
   if(!user)
      return res.status(400).send("User don't exist")

      return res.status(200).json({
        user,
        success: true
      })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" + error });
  }
};
