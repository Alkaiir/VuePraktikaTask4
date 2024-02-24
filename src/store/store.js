import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        user_token: null,
        url: 'https://jurapro.bhuser.ru/api-shop/'

    },
    getters: {
    },
    mutations: {

        // async logout(state){
        //
        //     const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userData)
        //         .then(function (response) {
        //             state.user_token = response.data.data.user_token;
        //             localStorage.token = state.user_token;
        //         })
        //         .catch(error =>{console.log(error)})
        // },

    },
    actions: {
    },
    modules: {
    },
})