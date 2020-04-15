// src/store/services/users.js
/*eslint-disable */
import feathersClient from '../../feathers-client';
import feathersVuex from '../feathersVuex';

const { makeServicePlugin, BaseModel } = feathersVuex;

class Notification extends BaseModel {
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'Notification';

  constructor(data, options) {
    super(data, options);
  }

  // Define default properties here
  static instanceDefaults() {
    return {
      text: '',
      type: '',
    };
  }
}

const servicePath = 'notifications';
const servicePlugin = makeServicePlugin({
  Model: Notification,
  service: feathersClient.service(servicePath),
  servicePath,
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
});

export default servicePlugin;
