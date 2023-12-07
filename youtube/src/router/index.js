import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage/App.vue'
import YourChannel from '../views/YourChannel/index.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/yourChannel',
        name: 'YourChannel',
        component: YourChannel
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router