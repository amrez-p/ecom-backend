const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model("crudModal", crudSchema);
