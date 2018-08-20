const express = require("express");
const router = express.Router();

//@route Get api/posts/test
//@desc Test post route
//@access Public
router.get("/", (req, res) => {
  res.json({ msg: "posts works" });
});

module.exports = router;
