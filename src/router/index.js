import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/characters',
        name: 'Characters',
        component: () => import('../views/Characters.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router