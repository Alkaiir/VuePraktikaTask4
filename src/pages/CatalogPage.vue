<script>
import store from "/src/store/store.js";
import Catalog from "../components/Catalog.vue";
export default {
  components: {Catalog},
  computed: {
    store() {
      return store
    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<template>
  <catalog class="catalog"></catalog>
</template>

<style scoped>
.catalog {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>