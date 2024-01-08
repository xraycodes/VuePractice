import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage/App.vue'
import YourChannel from '../views/YourChannel/index.vue'
import MJTrashTalk from '../views/videos/MJTrashTalk.vue'
import JerseyNumbers from '../views/videos/JerseyNumbers.vue'
import Resume from '../views/HomePage/resume.vue'
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/yourChannel',
        name: 'YourChannel',
        component: YourChannel
    },
    {
        path: '/MJTrashTalk',
        name: 'MJTrashTalk',
        component: MJTrashTalk
    },
    {
        path: '/JerseyNumbers',
        name: 'JerseyNumbers',
        component: JerseyNumbers
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router