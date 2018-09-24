import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire'

import routes from './routes.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee);
library.add(faShoppingCart);

Vue.use(VueRouter)
Vue.use(VueFire)


import './firebase';

//Global Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Global Elements

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
