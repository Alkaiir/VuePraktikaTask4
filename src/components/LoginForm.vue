<script>
import store from "/src/store/store.js";
import axios from "axios";

export default {
  computed: {
    store() {
      return store
    }
  },
  data(){
    return{
      email: null,
      password: null
    }
  },
  methods: {

    async login(){
      //валидация
      let userData={
        email: this.email,
        password: this.password
      }

      const data = await axios.post( store.state.url + 'login', userData)
          .then(function (response) {
            store.state.user_token = response.data.data.user_token;
            localStorage.token = store.state.user_token;
          })
          .catch(error =>{console.log(error)})
    },

  }
}
</script>

<template>
  <form action="" @click.prevent="default">
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Пароль</label>
    <input type="password" id="password" v-model="password">
    <button @click="login">Войти в аккаунт</button>
  </form>
</template>

<style scoped>

</style>