const express = require("express");
const crudModal = require("../models/crud.js");
const router = express.Router();

router.get("/crud", (req, res) => {
  res.render("crud", { layout: "index" });
});
router.post("/crud", (req, res) => {
  const user = new crudModal(req.body);

  console.log(user);
});

module.exports = router;
