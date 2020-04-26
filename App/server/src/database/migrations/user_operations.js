var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user_operations = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Boolean, required: true },
  updatedAt: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});
