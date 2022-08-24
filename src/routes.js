import { createWebHistory } from "vue-router";

export default {
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: () => import('@/App.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/views/Index.vue')
                },
                {
                    path: 'about',
                    component: () => import('@/views/About.vue')
                }
            ]
        }
    ]
}
