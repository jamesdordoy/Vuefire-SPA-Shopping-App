import Vue from 'vue'
import App from './App.vue'

import routes from './routes.js';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
