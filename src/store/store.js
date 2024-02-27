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
        catalog: []
    },
    getters: {
        config (state) {

            let config = {headers: {"Authorization": "Bearer " + state.user_token}}
            return config

        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})