const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

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
    required: false
  },
  imageCover : {
    type: String,
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
