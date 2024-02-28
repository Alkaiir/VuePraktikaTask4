<script>
import store from "/src/store/store.js";
import {getCart} from "../composeble/api/api.js";
import Cart from "../components/Cart.vue";
export default {
  components: {Cart},
  computed: {
    store() {
      return store
    }
  },
  methods:{

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
</template>

<style scoped>
.cart-content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100vw;
}
</style>