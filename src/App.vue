<template>
  <div class="content">
    <nav class="nav">
      <router-link class="nav-link" to="/catalog">Catalog</router-link>
      <router-link class="nav-link" v-if="store.state.user_token === null" to="/login">Login</router-link>
      <router-link class="nav-link" v-if="store.state.user_token === null" to="/registration">Registration</router-link>
      <a href="#" @click="store.commit('logout')">Logout</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  height: 100vh;
 }

.nav-link {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #2c3e50;
  padding: 15px 20px;
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