var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var notifications = new Schema({
  text: { type: String, required: true },
  status: { type: Boolean, required: true },
  type: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
