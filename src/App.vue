<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="store.state.user_token === null" to="/login">Login</router-link>
      <router-link v-if="store.state.user_token === null" to="/registration">Registration</router-link>
  </nav>
  <router-view></router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>

import store from "./store/store.js";

export default {
  computed: {
    store() {
      return store
    }
  },
  data(){
    return{
    }
  },
  mounted() {
    if (localStorage.token !== undefined && localStorage.token !== null) {
      store.state.user_token = localStorage.token;
    }
  }
}
</script>