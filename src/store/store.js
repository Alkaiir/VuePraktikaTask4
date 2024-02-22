import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        user_token: null,
        email: null,
        password: null,
        fio: null,

    },
    getters: {
    },
    mutations: {

        async login(state){
            //валидация
            let userData={
                email: state.email,
                password: state.password
            }

            const data = await axios.post('https://jurapro.bhuser.ru/api-shop/login',userData)
                .then(function (response) {
                    console.log(response);
                    state.user_token = response.data.data.user_token;
                    localStorage.token = state.user_token;
                })
                .catch(error =>{console.log(error)})
            console.log(data)
        },

        async registration(state){
            //валидация
            let userData = {
                fio: state.fio,
                email: state.email,
                password: state.password
            }
            const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userData)
                .then(function (response) {
                    console.log(response);
                    state.user_token = response.data.data.user_token;
                    localStorage.token = state.user_token;
                })
                .catch(error =>{console.log(error)})
            console.log(data)
        },
    },
    actions: {
    },
    modules: {
    },
})