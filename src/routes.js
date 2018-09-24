export default [
    {
        path: '/', component: require('./views/Home.vue').default
    },
    {
        path: '/create', component: require('./views/Create.vue').default
    },
    {
        path: '/login', component: require('./views/Login.vue').default
    },
];
