<script>
import store from "/src/store/store.js";
import {getCatalog} from "../composeble/api/api.js";
import CatalogItem from "./CatalogItem.vue";

export default {
  components:{CatalogItem},
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
  },
}
</script>

<template>
    <catalog-item v-for="item in store.state.catalog" :key="item.id" :item="item"></catalog-item>
</template>

<style scoped>

</style>