const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
const getUpload = require("./router/ImageUpload.js");
const path = require("path");

env.config();
const app = express();
const PORT = 3000 || process.env.PORT;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

mongoose
  .connect(process.env.Database)
  .then(console.log("connected to database"));

app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/uploadphoto", upload.single("myImage"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString("base64");
  var final_img = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_img, "base64"),
  };
  imageModel.create(final_img, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.img.Buffer);
      console.log("Saved To database");
      res.contentType(final_img.contentType);
      res.send(final_img.image);
    }
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
app.use("/", getUpload);

app.listen(PORT, (req, res) => {
  console.log(`Active on port: ${PORT} 🚀`);
});
