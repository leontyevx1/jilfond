import InfoEmployee from "@/components/InfoEmployee/InfoEmployee.vue";
import {createRouter, createWebHistory} from "vue-router";
import defaultBlock from "@/components/defaultBlock";

const routes = [
    {
        path: '/',
        component: defaultBlock,
    },
    {
        path: '/users/:id',
        component: InfoEmployee,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;