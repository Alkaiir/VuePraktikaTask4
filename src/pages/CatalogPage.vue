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
  <div class="catalog-content">
    <catalog></catalog>
  </div>
</template>

<style scoped>
.catalog-content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100vw;
}
</style>