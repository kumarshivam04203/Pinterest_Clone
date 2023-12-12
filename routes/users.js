const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.01:27017/newApp")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    // required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  dp: {
    type: String //Assuming the profile picture is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String
  }
});

userSchema.plugin(plm)

module.exports = mongoose.model('User', userSchema);


