const express = require("express");
//const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
//const getUpload = require("./router/ImageUpload.js");
const path = require("path");
const EmailRoute = require("./router/EmailRoute.js");
const handlebars = require("express-handlebars");
const CrudRoute = require("./router/CrudRoute.js");

env.config();
const app = express();
const PORT = 3000 || process.env.PORT;

app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
    layoutsDir: "html",
  }),
);
app.set("view engine", ".hbs");
app.set("views", "./html");

//database connection
mongoose
  .connect(process.env.Database)
  .then(console.log("connected to database"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Routes
app.use("/api", EmailRoute);
app.use("/api", CrudRoute);

app.listen(PORT, (req, res) => {
  console.log(`Active on port: ${PORT} 🚀`);
});
