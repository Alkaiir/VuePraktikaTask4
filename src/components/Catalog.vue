<script>
import store from "/src/store/store.js";
import {getCatalog} from "../composeble/api/api.js";

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
    getCatalog()
  }
}
</script>

<template>
  <h1>Главная страница</h1>
  <div v-for="item in store.state.catalog" :key="item.id">
    <p>{{ item.id }}</p>
    <p>{{ item.name }}</p>
    <p>{{ item.desc }}</p>
  </div>
</template>

<style scoped>

</style>