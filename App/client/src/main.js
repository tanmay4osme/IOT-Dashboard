import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import './assets/css/anim.css';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
