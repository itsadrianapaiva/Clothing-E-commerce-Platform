const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");


//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        success: false,
        message: "User already exists with this email. Please login instead or register with a different email.",
      })
    }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          userName,
          email,
          password: hashPassword
        })

        await newUser.save();
        res.status(201).json({
          success: true,
          message: "Registration created successfully",
        })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {




  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//logout

//auth middleware


console.log("Auth Controller Loaded");
module.exports = { registerUser, loginUser };