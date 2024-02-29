<script>
import store from "/src/store/store.js";
import Orders from "../components/Orders.vue";
import {getOrders} from "../composeble/api/api.js";
export default {
  components: {Orders},
  computed: {
    store() {
      return store
    }
  },
  methods: {},
  mounted() {
    getOrders()
  }
}
</script>

<template>
  <div class="orders-content">
    <orders></orders>
  </div>
</template>

<style scoped>
.orders-content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100vw;
}
</style>