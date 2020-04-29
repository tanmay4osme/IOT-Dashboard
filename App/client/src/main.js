import Vue from 'vue';
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import JsonCSV from 'vue-json-csv';

import './assets/css/anim.css';

Vue.component('downloadCsv', JsonCSV);
Vue.component('apexchart', VueApexCharts);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
