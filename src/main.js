import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire'

import routes from './routes.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee);
library.add(faTrash);
library.add(faShoppingCart);

Vue.use(VueRouter)
Vue.use(VueFire)

import Snotify, { SnotifyPosition } from 'vue-snotify';
Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.rightTop
  }
});

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import './firebase';

//Global Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Global Elements
Vue.component('text-input', require('./elements/TextInput').default);
Vue.component('email-input', require('./elements/TextInput').default);
Vue.component('textarea-input', require('./elements/TextAreaInput').default);
Vue.component('password-input', require('./elements/PasswordInput').default);
Vue.component('form-group', require('./elements/FormGroup').default);
Vue.component('outline-button', require('./elements/Button').default);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

import { auth } from './firebase'

router.beforeEach((to, from, next) => {
  //Check for required auth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //Check if not logged into firebase
    if (!auth.currentUser) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (auth.currentUser) {
      next({
        path: '/'
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
})

let app;
// eslint-disable-next-line
auth.onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});


