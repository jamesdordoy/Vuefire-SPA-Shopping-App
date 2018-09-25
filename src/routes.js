export default [
    {
        path: '/',
        component: require('./views/Home.vue').default,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: require('./views/Login.vue').default,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/:id',
        component: require('./views/View.vue').default,
        meta: {
            requiresAuth: true
        }
    },
];
