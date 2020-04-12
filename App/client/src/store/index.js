// src/store/index.js
/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store.auth';
import localAuth from './modules/localAuth';
import feathersVuex from './feathersVuex';

const { FeathersVuex } = feathersVuex;

Vue.use(Vuex);
Vue.use(FeathersVuex);

const requireModule = require.context('./services', false, /.js$/);
const servicePlugins = requireModule.keys().map((modulePath) => requireModule(modulePath).default);

export default new Vuex.Store({
  modules: { localAuth },
  state: {},
  mutations: {},
  actions: {},
  plugins: [auth, ...servicePlugins],
});
