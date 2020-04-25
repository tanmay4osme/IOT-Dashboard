var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var resource = new Schema({
  resourceName: { type: String, required: true },
  resourceDescription: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
