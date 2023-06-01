const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    //const token = req.header('Authorization');
    const token = req.headers.auhorization.split(" ")[1];
    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.SECRET_TOKEN);
      req.userId = decodedData?.sub;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log("midware/auth",error.message);
  }
};

module.exports = auth;
