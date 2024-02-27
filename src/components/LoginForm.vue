<script>
import store from "/src/store/store.js"
import {login} from "../composeble/api/api.js";
import NewButton from "./NewButton.vue";

export default {
  components: {NewButton},
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
    <new-button @click="login">Войти в аккаунт</new-button>
  </form>
</template>

<style scoped>
</style>