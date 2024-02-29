import { createStore } from 'vuex'

export default createStore({
    state: {
        user_token: null,
        url: 'https://jurapro.bhuser.ru/api-shop/',
        config: {
            headers: {
                Authorization: 'Bearer '
            }
        },
        catalog: [],
        cart: [],
        orders: []
    },
    getters: {
        config (state) {

            return {headers: {Authorization: "Bearer "  + state.user_token}}

        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})