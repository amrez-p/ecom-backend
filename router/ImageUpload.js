const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendfile("./index.html");
});

// router.post("/", upload.single("file"), (req, res) => {
//   res.status(200).json("file uploaded");
// });

module.exports = router;
