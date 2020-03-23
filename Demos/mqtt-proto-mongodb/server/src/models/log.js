const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  value: mongoose.Schema.Types.Number
});

module.exports = mongoose.model("Log", productSchema);
