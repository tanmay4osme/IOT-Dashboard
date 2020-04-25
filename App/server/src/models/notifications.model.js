// notifications-model.js - A mongoose model
const modelNames = require('../constants/modelNames');

module.exports = (app) => {
  const modelName = modelNames.notifications;
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      text: { type: String, required: true },
      type: { type: String, required: true },
      status: { type: Boolean, required: true },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
