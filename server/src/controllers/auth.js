const Auth = require("../models/auth.js");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await Auth.findOne({ email });
    const jwt = require("jsonwebtoken");

    if (user) {
      return res.status(409).json({
        message: "There is an account that registered with same email",
      });
    }

    if (password.length < 6) {
      return res
        .status(411)
        .json({ message: "Not enough length for password" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await Auth.create({
      username,
      email,
      password: passwordHash,
    });
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
    const user = await Auth.findOne({});
    if (!user) {
      return res.status(404).json({
        message: "The account could not be found",
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

    res
      .status(200)
      .json({ user: { username: user.username, email: user.email } });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/auth/getUserById: " + error.message });
  }
};

module.exports = { register, login, getUserById };
