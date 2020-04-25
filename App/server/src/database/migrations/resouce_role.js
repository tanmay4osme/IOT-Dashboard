var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var resouce_role = new Schema({
  can_add: { type: Boolean, required: true },
  can_view: { type: Boolean, required: true },
  can_edit: { type: Boolean, required: true },
  can_delete: { type: Boolean, required: true },
  role: { type: Schema.Types.ObjectId, required: true, ref: 'role' },
  resource: { type: Schema.Types.ObjectId, required: true, ref: 'resource' },
});
