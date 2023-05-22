const express = require("express");
const { register, login, getUserById } = require("../controllers/auth.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/deneme",(req,res)=>{
    res.status(200).json({ message:"ula ula ula" });
})
router.get("/getUserDetail/:id", getUserById)

module.exports = router;

