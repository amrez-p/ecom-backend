const express = require("express");
//const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
//const getUpload = require("./router/ImageUpload.js");
const path = require("path");
const EmailRoute = require("./router/EmailRoute.js");

env.config();
const app = express();
const PORT = 3000 || process.env.PORT;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

mongoose
  .connect(process.env.Database)
  .then(console.log("connected to database"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", EmailRoute);

app.listen(PORT, (req, res) => {
  console.log(`Active on port: ${PORT} 🚀`);
});
