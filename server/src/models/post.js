const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("posts", PostSchema);
