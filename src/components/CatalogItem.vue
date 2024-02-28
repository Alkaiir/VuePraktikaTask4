<script>
import store from "../store/store.js";
import NewButton from "./NewButton.vue";
import {addToCart} from "../composeble/api/api.js";
export default {
  components: {NewButton},
  data(){
    return{
    }
  },
  computed: {
    store() {
      return store
    }
  },
  props: {
    item: Object
  },
  methods: {
    addToCart (item) {
      addToCart(item);
    }
  }
}
</script>

<template>
  <div class="card">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <p><strong>{{ item.price }}</strong></p>
    <new-button v-if="store.state.user_token" @click="addToCart(item)">Добавить в карзину</new-button>
    <new-button v-if="!store.state.user_token" disabled>Добавить в карзину</new-button>
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
</style>