//Packages
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire'
import Vuelidate from 'vuelidate';
import Snotify, { SnotifyPosition } from 'vue-snotify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

//Moduals
import routes from './routes.js';
import { auth } from './firebase';

//Font Awesome
library.add(faCoffee);
library.add(faTrash);
library.add(faShoppingCart);

//Vue Plugins
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueFire);
Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.rightTop
  }
});

//Global Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Global Elements
Vue.component('text-input', require('./elements/TextInput').default);
Vue.component('email-input', require('./elements/TextInput').default);
Vue.component('textarea-input', require('./elements/TextAreaInput').default);
Vue.component('password-input', require('./elements/PasswordInput').default);
Vue.component('form-group', require('./elements/FormGroup').default);
Vue.component('outline-button', require('./elements/Button').default);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

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
      next();
    }
  } else {
    next();
  }
})

let app;
auth.onAuthStateChanged(function() {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});


