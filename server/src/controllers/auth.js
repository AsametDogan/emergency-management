const Auth = require("../models/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      phone,
      adress,
      contactName,
      contactPhone,
      isAdmin,
    } = req.body;
    console.log(req.body);
    const user = await Auth.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "There is an account that registered with same email",
      });
    }

    if (!checkPassword(password)) {
      console.log("şifre ynalşı");
      return res.status(411).json({
        message:
          "Password should contain at least 8 digits, at least one character, number and special character.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await Auth.create({
      username,
      email,
      phone,
      adress,
      contactName,
      contactPhone,
      isAdmin,
      password: passwordHash,
    });
    console.log("new user" + newUser);
    const userToken = await jwt.sign(
      { id: newUser.id },
      process.env.SECRET_TOKEN,
      { expiresIn: "6h" }
    );

    res.status(201).json({
      status: "OK",
      newUser,
      userToken,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "ctrl/auth/register: " + error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "The account could not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Password is not correct" });
    }

    const userToken = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, {
      expiresIn: "6h",
    });

    res.status(200).json({
      status: "OK",
      user,
      userToken,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "ctrl/auth/login: " + error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Auth.findById(id);
    if (!user) {
      return res.status(404).json({ message: "The user could not find" });
    }

    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        adress: user.adress,
        contactName: user.contactName,
        contactPhone: user.contactPhone,
        isAdmin:user.isAdmin
      },
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/auth/getUserById: " + error.message });
  }
};

function checkPassword(password) {
  // Check if password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if password contains at least one character
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  // Check if password contains at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>-]/.test(password)) {
    return false;
  }

  // Check if password contains at least one number
  if (!/\d/.test(password)) {
    return false;
  }

  // If all conditions pass, return true
  return true;
}

module.exports = { register, login, getUserById };
