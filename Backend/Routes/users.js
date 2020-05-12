const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();



//User Model
const User = require("../Models/User");




router.get("/", (req, res) => {
  User.find().then((users) => res.json(users));
});


//test if user already exist ! 
// @route  POST api/users
// @desc   Create A User with beta Crypt
// @access Public

router.post("/", (req, res) => {
  const {  username,
    email,
    password,
    confirmPassword,
    imageUser,
    imageCover,
    dataOfBirth,
    aboutUser,
    country,
    activate,
    banned,
    createdAt,
    role} = req.body;

  // Test if user exist Already
  User.findOne({ email }).then(user => {
    if (user) return res.sendStatus(409);
    else {
      const newUser = new User({
        username,
        email,
        password,
        confirmPassword,
        imageUser,
        imageCover,
        dataOfBirth,
        aboutUser,
        country,
        activate,
        banned,
        createdAt,
        role,
      });

      // Code the password using bcrypt module
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then(newuser => res.json(newuser))
            .catch(err => res.send(err));
        });
      });
    }
  });
});

// @route  LOGIN api/login
// @desc   Login into an Account
// @access Public

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) res.sendStatus(409);
    else {
      bcrypt
        .compare(password, user.password)
        .then(isMatched => {
          if (isMatched) {
            const payload = { id: user._id, email: user.email,imageUser:user.imageUser,username:user.username };
            jwt.sign(payload, "session", { expiresIn: 3600 }, (err, token) => {
              if (err) res.sendStatus(500);
              else res.json({ token: "Bearer " + token });
            });
          } else res.send(400);
        })
        .catch(err => res.send("server error"));
    }
  });
});

// @route  CURRENT api/current
// @desc   Validate token
// @access Public

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;