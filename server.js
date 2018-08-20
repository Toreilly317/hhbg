const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

//routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const stash = require("./routes/api/stash");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
