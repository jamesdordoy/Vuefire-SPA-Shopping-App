export default [
    {
        path: '/', component: require('./views/Home.vue').default
    },
    {
        path: '/login', component: require('./views/Login.vue').default
    },
    {
        path: '/:id', component: require('./views/View.vue').default
    },
];
