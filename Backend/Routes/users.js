const express = require("express");
const router = express.Router();


//User Model
const User = require("../Models/User");

// Post User

router.post("/", (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const newUSer = new User({
    username,
    email,
    password,
    confirmPassword,
  });
  newUSer
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});
router.get("/",(req,res)=>{
  User.find().then(users =>res.json(users))
})

module.exports = router;
