import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArchivosView from "../views/ArchivosView.vue";
import ConfiguracionView from "../views/ConfiguracionView.vue";
import ReportesView from "../views/ReportesView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
         {
            path: '/archivos',
            name: 'archivos',
            component: ArchivosView
        },
         {
            path: '/configuracion',
            name: 'configuracion',
            component: ConfiguracionView
        },
         {
            path: '/reportes',
            name: 'reportes',
            component: ReportesView
        }
    ]
})

export default router