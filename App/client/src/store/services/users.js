// src/store/services/users.js
/*eslint-disable */
import feathersClient from '../../feathers-client';
import feathersVuex from '../feathersVuex';

const { makeServicePlugin, BaseModel } = feathersVuex;

class User extends BaseModel {
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'User';

  constructor(data, options) {
    super(data, options);
  }

  // Define default properties here
  static instanceDefaults() {
    return {
      username: '',
      password: '',
      displayName: '',
      imageUrl: '',
      role: 'Member',
      email: '',
      phone: '',
    };
  }
}

const servicePath = 'users';
const servicePlugin = makeServicePlugin({
  Model: User,
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
