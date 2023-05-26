const Auth = require("../models/auth.js");

//const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const user = await Auth.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "There is an account that registered with same email",
      });
    }

    if (passwordCheck(password)) {
      return res
        .status(411)
        .json({ message: "Password should contain at least 8 digits, at least one character, number and special character." });
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
    const user = await Auth.findOne({email});
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

    res
      .status(200)
      .json({ user: { username: user.username, email: user.email } });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/auth/getUserById: " + error.message });
  }
};



const passwordCheck = (password) => {
    var hasNumber;
    var hasChar;
    var hasSymbol;
    var has8digits;
    (password.length>=8) ? true: false;

    password.forEach(checkCharacters);

    var isValid = hasNumber && hasChar && hasSymbol && has8digits;
    return isValid;

}


const checkCharacters = (charOfPassword) =>{
  if (isInteger(charOfPassword)){
    hasNumber =true;
  }
  else if(checkLetter(charOfPassword)){
    hasChar=true;
  }
  else if(containsSpecialChars(charOfPassword)){
    hasSymbol =true;
  }
}

function checkLetter(str) {
  return /^[A-Za-z]*$/.test(str);
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}



module.exports = { register, login, getUserById };
