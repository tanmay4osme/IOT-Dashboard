var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, required: true, ref: 'role' },
  darkMode: { type: Boolean, required: true },
});
