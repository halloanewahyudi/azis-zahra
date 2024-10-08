import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Cover.vue') },
    { path: '/couple', component: () => import('./components/Profile.vue') },
]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHistory(),
    routes,
})

export default router