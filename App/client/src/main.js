import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import VueMqtt from 'vue-mqtt';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import './assets/css/anim.css';

Vue.use(VueMqtt, 'mqtt://intelliflow.pxl-ea-ict.be:24071');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
