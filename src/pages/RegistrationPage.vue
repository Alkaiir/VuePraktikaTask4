<script>
import store from "/src/store/store.js";

export default {
  computed: {
    store() {
      return store
    }
  },
  data(){
    return{
    }
  }
}

</script>

<template>
  <h3>{{ store.state.user_token }}</h3>
  <form action="" @click.prevent="default" class="form">
    <label for="fio">FIO: {{ store.state.fio }}</label>
    <input type="text" id="fio" v-model="store.state.fio">
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="store.state.email">
    <label for="password">Password</label>
    <input type="text" id="password" v-model="store.state.password">
    <button @click="store.commit('registration')">Registration</button>
  </form>
</template>

<style scoped>
.form{
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>