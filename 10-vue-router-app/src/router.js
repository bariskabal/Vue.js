import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        name: "HomePage",
        path: '/',
        component: () => import('@/views/HomePage')
    },
    {
        name:"NewBookMark",
        path : "/new",
        component: () => import("@/views/NewBookMark")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router