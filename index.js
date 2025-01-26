const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("work");
});

app.listen(3000, () => {
  console.log("shop app listening on http://localhost:3000");
});
