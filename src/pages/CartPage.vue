<script>
import store from "/src/store/store.js";
import {createOrder, getCart} from "../composeble/api/api.js";
import Cart from "../components/Cart.vue";
import NewButton from "../components/NewButton.vue";
export default {
  components: {NewButton, Cart},
  computed: {
    store() {
      return store
    }
  },
  methods:{
    createOrder() {
      createOrder()
    }

  },
  mounted() {
    getCart()
  }
}
</script>

<template>
  <div class="cart-content">
    <cart></cart>
  </div>
  <div class="cart-buttons"><new-button class="add-order-button" @click="createOrder()">Собрать заказ</new-button></div>
</template>

<style scoped>
.cart-content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100vw;
}
.cart-buttons {
  display: flex;
  justify-content: center;
}
</style>