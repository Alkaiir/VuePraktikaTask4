import * as VueRouter from 'vue-router';

import CartPage from "../pages/CartPage.vue";
import CatalogPage from "../pages/CatalogPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import OrdersPage from "../pages/OrdersPage.vue";

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
    {path: '/cart',
     name:'cart',
     component: CartPage
    },
    {path: '/orders',
        name:'orders',
        component: OrdersPage
    },
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router