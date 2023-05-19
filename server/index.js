const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./src/config/database.js");
const Auth = require("./src/routes/auth.js");
const Post = require("./src/routes/post.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.use("/", Auth);
app.use("/", Post);
app.get("/test",(req,res)=>{
  res.status(200).json({ message:"ula ula ula" });
})


     

db();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
