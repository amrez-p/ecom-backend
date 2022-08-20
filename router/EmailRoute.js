const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/email", (req, res) => {
  res.send("Email Router");
});

router.post("/email", (req, res) => {
  // Your personal email authentication
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abc@gmail.com",
      pass: "zzqqwxpmvxlhticx",
    },
  });

  const msg = {
    from: "abc@gmail.com", // sender address
    to: "b2c@gmail.com", // list of receivers
    subject: "Hello mail", // Subject line
    text: "Hello world?", // plain text body
    html: "<h2>Hello world?</h2>", // html body
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
