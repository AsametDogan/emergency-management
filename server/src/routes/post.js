const express = require("express");
const { createPost, getAllPosts, getPostById,searchPost, updatePost, deletePost } = require("../controllers/post.js");
const auth = require("../middleware/auth.js");


const router = express.Router();

router.get("/getAllPosts", getAllPosts);


router.get("/searchPost/", searchPost);
router.get("/getDetailPost/:id",getPostById );
router.post("/createPost", createPost);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
