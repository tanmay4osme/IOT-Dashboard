import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';


//https://fontawesome.com/icons
import { library } from '@fortawesome/fontawesome-svg-core';

//1 ADD NEW ICON HERE
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//2 ADD NEW ICON IN THS LINE
library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router, 
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
