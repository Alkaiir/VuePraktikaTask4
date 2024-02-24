import * as VueRouter from 'vue-router';


import CatalogPage from "../pages/CatalogPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";

const routes = [
    {path: '/catalog',
     name: 'catalog',
     component: CatalogPage
    },
    {path: '/login',
     name: 'login',
     component: LoginPage
    },
    {path: '/registration',
     name:'registration',
     component: RegistrationPage
    },
]


const router = VueRouter.createRouter({
    // history: VueRouter.createWebHashHistory(),
    routes,
})

export default router