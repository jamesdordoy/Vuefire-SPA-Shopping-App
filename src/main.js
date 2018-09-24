import Vue from 'vue'
import App from './App.vue'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import './main.css'

new Vue({
  render: h => h(App)
}).$mount('#app')
