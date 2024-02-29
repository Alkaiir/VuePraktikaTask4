<script>
import OrdersItem from "./OrdersItem.vue";
import store from "../store/store.js"

export default {
  components: {OrdersItem},
  computed: {
    store() {
      return store
    }
  },

}
</script>

<template>
  <orders-item v-for="order in store.state.orders" :key="order.id" :order="order"></orders-item>
</template>

<style scoped>

</style>