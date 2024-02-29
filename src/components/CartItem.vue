<script>
import NewButton from "./NewButton.vue";
import {addToCart, deleteFromCart} from "../composeble/api/api.js";

export default {
  methods: {
    addToCart (item) {
      addToCart(item);
    },
    deleteFromCart (item) {
      deleteFromCart(item)
    }
  },
  components: {NewButton},
  props: {
    item: Object
  },
}
</script>

<template>
  <div class="card">
    <h3>{{ item.itemInfo.name }}</h3>
    <p>{{ item.itemInfo.description }}</p>
    <p><strong>{{ item.itemInfo.price }}</strong></p>

    <div class="counter">
      <new-button class="counterChangeButton" @click="addToCart(item.itemInfo)"> + </new-button>
      <p>{{ item.count }}</p>
      <new-button class="counterChangeButton" @click="deleteFromCart(item.itemInfo)"> - </new-button>
    </div>

    <new-button @click="deleteFromCart(item.itemInfo)">Удалить товар</new-button>

  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #2c3e50;
  padding: 10px;
}

.counterChangeButton {
  width: 30px;
}

.counter {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>