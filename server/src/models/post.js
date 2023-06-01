const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
  },
  urgency: {
    type: String,
    trim: true,
  },  
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
  contactName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  }
});

module.exports = mongoose.model("posts", PostSchema);
