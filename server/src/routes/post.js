const express = require("express");
const { createPost, getAllPosts, getPostById,searchPost, updatePost, deletePost } = require("../controllers/post.js");
const auth = require("../middleware/auth.js");


const router = express.Router();

router.get("/getAllPosts", getAllPosts);


router.get("/searchPost/", searchPost);
router.get("/getDetailPost/:id",getPostById );
router.post("/createPost",auth, createPost);
router.patch("/updatePost/:id",auth, updatePost);
router.delete("/deletePost/:id",auth, deletePost);

module.exports = router;
