const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
// TEEEEEEEEEEEEEEEEEEEST
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  
  imageUser : {
    type: String,
    default:"https://cdn.dribbble.com/users/567082/screenshots/4356358/profile_picture.png",
    required: false
  },
  imageCover : {
    type: String,
    default: "../Public/coverImage.jpg",
    required: false
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  aboutUser: {
    type: String,
    required: false
  },
  country : {
    type: String,
    required: false
  },
  activate: {
    type: Boolean,
    required: false
  },
  banned : {
    type: Boolean,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    required:false,
  }
},
{ collection : 'users' });

module.exports = User = mongoose.model('user', UserSchema)
