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
            console.log(response);
            store.state.user_token = response.data.data.user_token;
            localStorage.token = store.state.user_token;
        })
        .catch(error => {
            console.log(error)
        })
    router.push('catalog');

}

const getCatalog = async function (){

    store.state.catalog = [];

    const data = await axios.get(store.state.url + 'products')
        .then(function (response) {
            for (let i = 0; i < response.data.data.length; ++i) {
                store.state.catalog.push(response.data.data[i]);
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const addToCart = async function(item) {

    if (item.hasOwnProperty('product_id')){

        const data = await axios.post(store.state.url + 'cart/' + item.product_id, item, store.getters.config)
            .then(function (response) {
                getCart()
            })
            .catch(error => {
                console.log(error)
            })

    } else {

        const data = await axios.post(store.state.url + 'cart/' + item.id, item, store.getters.config)
            .then(function (response) {
                getCart()
            })
            .catch(error => {
                console.log(error)
            })

    }
}

const deleteFromCart = async function(item) {

    const data = await axios.delete(store.state.url + 'cart/' + item.id, store.getters.config)
        .then(function (response) {
            getCart()
        })
        .catch(error => {
            console.log(error)
        })

}

const getCart = async function() {

    store.state.cart = [];

    const data = await axios.get(store.state.url + 'cart', store.getters.config)
        .then(function (response) {
            for (let i = 0; i < response.data.data.length; ++i) {
                let cartItem = {
                    itemInfo: {
                        name: response.data.data[i].name,
                        description:response.data.data[i].description,
                        product_id: response.data.data[i].product_id,
                        id: response.data.data[i].id,
                        price: response.data.data[i].price,
                    },
                    count: 1
                }

                store.state.cart.push(cartItem);

                // if (store.state.cart.length === 0) {
                //     store.state.cart.push(cartItem);
                // } else {
                //     for (let j = 0; j < store.state.cart.length; ++j) {
                //         if (store.state.cart[j].itemInfo.product_id === cartItem.itemInfo.product_id) {
                //             store.state.cart[j].count += 1;
                //         } else {
                //             store.state.cart.push(cartItem);
                //             j = store.state.cart.length;
                //         }
                //     }
                // }
            }
        })
        .catch(error => {
            console.log(error)
        })

}

const createOrder = async function() {
    let newOrder = store.state.cart.map(item => ({item}))
    const data = await axios.post(store.state.url + 'order', newOrder, store.getters.config)
        .then(function (response) {
            router.push('orders')
        })
        .catch(error => {
            console.log(error)
        })

}

const getOrders = async function() {

    store.state.orders = [];

    const data = await axios.get(store.state.url + 'order', store.getters.config)
        .then(function (response) {
            for (let i = 0; i < response.data.data.length; ++i) {
                store.state.orders.push(response.data.data[i]);
            }
        })
        .catch(error => {
            console.log(error)
        })

}


export {logout, registration, login, getCatalog, addToCart, getCart, deleteFromCart, createOrder, getOrders}