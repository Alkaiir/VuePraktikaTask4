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
      fio: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async registration(){

      //валидация

      let userData = {
        fio: this.fio,
        email: this.email,
        password: this.password
      }
      const data = await axios.post( store.state.url + 'signup', userData)
          .then(function (response) {
            store.state.user_token = response.data.data.user_token;
            localStorage.token = store.state.user_token;
          })
          .catch(error =>{console.log(error)})
    }
  }
}
</script>

<template>
  <form action="" @click.prevent="default">
    <label for="fio">Фио:</label>
    <input type="text" id="fio" v-model="fio">
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Пароль</label>
    <input type="password" id="password" v-model="password">
    <button @click="registration">Создать аккаунт</button>
  </form>
</template>

<style scoped>

</style>