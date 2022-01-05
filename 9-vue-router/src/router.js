import {createRouter, createWebHistory} from 'vue-router'
//import HomeCmp from '@/views/Home'

const routes = [
    {
        name: "HomePage",
        path: '/',
        component: () => import('@/views/Home')
    },
    {
        name:"AboutPage",
        path : "/hakkimda",
        component: () => import("@/views/About")
    },
    {
        name: "DetailPage",
        path : "/detay/:id",
        component: () => import("@/views/Details")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router