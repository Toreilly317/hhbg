const express = require("express");
const app = express();

const mongoose = require("mongoose");

const db = require("../config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello wolrd");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
