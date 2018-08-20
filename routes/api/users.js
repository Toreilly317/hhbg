const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

//load user model
const User = require("../../models/User");

router.get("/", (req, res) => {
  res.json({ msg: "users works" });
});

module.exports = router;

//@route POST api/users/register
//@desc Register User
//@access Public
router.post("/register", (req, res) => {
  const { name, email, password, avatar } = req.body;

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({ name, email, password, avatar });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
