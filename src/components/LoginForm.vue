<script>
import store from "/src/store/store.js"
import {login} from "../composeble/api/api.js";

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
    login () {

      if (this.email !== null && this.password !== null) {
        login(this.email, this.password)
      }

    }
  }
}
</script>

<template>
  <form action="" @click.prevent="default">
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Пароль</label>
    <input type="password" id="password" v-model="password">
    <button class="formButton" @click="login">Войти в аккаунт</button>
  </form>
</template>

<style scoped>
</style>