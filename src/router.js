import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Cover.vue') },
    { path: '/couple', component: () => import('./components/Profile.vue') },
    { path: '/waktu', component: () => import('./components/Waktu.vue') },
    { path: '/turut-mengundang', component: () => import('./components/TurutMengundang.vue') },
    { path: '/kondangan', component: () => import('./components/Kondangan.vue') },
    { path: '/komentar', component: () => import('./components/Komentar.vue') },
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