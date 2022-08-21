const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/email", (req, res) => {
  res.render("email", { layout: "index" });
});

router.post("/email", (req, res) => {
  // Your personal email authentication
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: req.body.user,
      pass: req.body.password,
    },
  });

  const msg = {
    from: req.body.address, // sender address
    to: req.body.reciever, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
  };
  // send mail with defined transport object
  const info = transporter.sendMail(msg, (err, info) => {
    if (err) {
      res.json(err);
    } else {
      res.json(info);
    }
  });
});

module.exports = router;
