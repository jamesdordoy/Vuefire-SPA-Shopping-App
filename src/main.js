import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire'

import routes from './routes.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee);
// library.add(faGithub);
library.add(faShoppingCart);

Vue.use(VueRouter)
Vue.use(VueFire)

import Snotify from 'vue-snotify';
Vue.use(Snotify)

import './firebase';

//Global Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Global Elements
Vue.component('text-input', require('./elements/TextInput').default);
Vue.component('form-group', require('./elements/FormGroup').default);
Vue.component('outline-button', require('./elements/Button').default);

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
