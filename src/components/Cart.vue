<script>
import CartItem from "../components/CartItem.vue"
import store from "../store/store.js"

export default {
  components: {CartItem},
  computed: {
    store() {
      return store
    }
  },

}
</script>

<template>
  <cart-item v-for="item in store.state.cart" :key="item.product_id" :item="item"></cart-item>
</template>

<style scoped>

</style>