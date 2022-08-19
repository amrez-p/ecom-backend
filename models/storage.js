const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  img: { data: Buffer, contentType: String },
});

module.exports = new mongoose.model("Image", imageSchema);
