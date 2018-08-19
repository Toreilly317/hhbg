const express = require("express");
const app = express();

//routes
const users = require("./api/users");
const posts = require("./api/posts");
const profile = require("./api/profile");
const stash = require("./api/stash");

const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello wolrd");
});

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/stash", stash);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
