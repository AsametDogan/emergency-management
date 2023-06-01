const { models } = require("mongoose");
const Post = require("../models/post.js");

const createPost = async (req, res) => {
  try {
    console.log(req.body);
    const newPost = await Post.create(req.body);
    
    res.status(201).json({ newPost });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "ctrl/post/createPost: " + error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json({ allPosts });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/post/getAllPosts: " + error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const postDetail = await Post.findById(id);
    if (!postDetail) {
      return res.status(404).json({ message: "The post could not find" });
    }

    res.status(200).json({ postDetail });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/post/getPostById: " + error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true, //for returning to updated post
    });
    res.status(200).json({ updatedPost });

  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/post/updatePost: " + error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.status(204).json({
      message: "Post delete is successful",
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/post/deletPost: " + error.message });
  }
};

const searchPost = async (req, res) => {
  const { search, tag } = req.query;

  try {
    const title = new RegExp(search, "i");
    const posts = await Post.find({
      $or: [{ title }],
      tag: { $in: tag.split(",") },
    });
    res.status(200).json({ posts });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "ctrl/post/searchPost: " + error.message });
  }
};

module.exports = {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
  searchPost,
};
