<script>
import store from "./store/store.js"
import {logout} from "/src/composeble/api/api.js"
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
  methods: {
    logout () {
      logout()
    }
  },
  mounted() {
    if (localStorage.token !== undefined && localStorage.token !== null) {
      store.state.user_token = localStorage.token;
    }
  }
}
</script>

<template>
  <div class="content">
    <header class="nav">
      <nav class="nav-links">
        <router-link class="nav-link" to="/catalog">Каталог</router-link>
        <router-link class="nav-link" to="/cart" v-if="store.state.user_token !== null">Корзина</router-link>
        <router-link class="nav-link" v-if="store.state.user_token === null" to="/login">Авторизация</router-link>
        <router-link class="nav-link" v-if="store.state.user_token === null" to="/registration">Регистрация</router-link>
        <router-link class="nav-link" v-if="store.state.user_token !== null" to="/catalog" @click="logout">Выход</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
 }

.nav-link {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #2c3e50;
  padding: 15px 20px;
  width: 100vw;
  height: 5vh;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
