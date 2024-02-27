<script>
import store from "/src/store/store.js";
import {registration} from "../composeble/api/api.js";
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
      fio: null,
      email: null,
      password: null,
    }
  },
  methods: {
    registration(){

      if (this.fio !== null && this.email !== null && this.password !== null) {
        registration(this.fio, this.email, this.password);
      }

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
    <new-button @click="registration">Создать аккаунт</new-button>
  </form>
</template>

<style scoped>

</style>