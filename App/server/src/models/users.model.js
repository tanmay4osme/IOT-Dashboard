// users-model.js - A mongoose model
const modelNames = require('../constants/modelNames');

module.exports = (app) => {
  const modelName = modelNames.users;
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema(
    {
      username: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      displayName: { type: String, unique: true, required: true },
      imageUrl: { type: String, required: true },
      role: { type: String, required: true, default: 'Member' },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      darkMode: { type: Boolean, required: true, default: false },
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
