const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("database.js/db: "+err);
    });
};

module.exports=db
