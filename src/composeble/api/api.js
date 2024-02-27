import store from "/src/store/store.js";
import axios from "axios";
import router from "../../router/router.js";

const logout = async function (){

    const data = await axios.get(store.state.url + 'logout', store.getters.config)
        .then(function (response) {
            store.state.user_token = null;
            localStorage.removeItem('token');
            router.push('/login')
        })
        .catch(error => {
            console.log(error)
        })

}

const registration = async function (fio, email, password){

    let userData = {
        fio: fio,
        email: email,
        password: password
    }
    const data = await axios.post( store.state.url + 'signup', userData)
        .then(function (response) {
            store.state.user_token = response.data.data.user_token;
            localStorage.token = store.state.user_token;
        })
        .catch(error =>{console.log(error)})

    router.push('catalog');
}

const login = async function (email, password){

    let userData = {
        email: email,
        password: password
    }

    const data = await axios.post(store.state.url + 'login', userData)
        .then(function (response) {
            store.state.user_token = response.data.data.user_token;
            localStorage.token = store.state.user_token;
        })
        .catch(error => {
            console.log(error)
        })
    router.push('catalog');

}

const getCatalog = async function (){

    const data = await axios.get(store.state.url + 'products')
        .then(function (response) {
            for (let i = 0; i < response.data.data.length; ++i) {
                store.state.catalog.push(response.data.data[i])
            }
            console.log(store.state.catalog)
        })
        .catch(error => {
            console.log(error)
        })
}

const addToCart = async function() {

    const data = await axios.post(store.state.url + 'products')
        .then(function (response) {
            for (let i = 0; i < response.data.data.length; ++i) {
                store.state.catalog.push(response.data.data[i])
            }
            console.log(store.state.catalog)
        })
        .catch(error => {
            console.log(error)
        })

}

export {logout, registration, login, getCatalog, addToCart}