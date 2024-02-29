<script>

export default {

  props: {
    order: Object
  },
}
</script>

<template>
  <div class="card">
    <h3>Заказ №{{ order.id }}</h3>
    <p>Общая сумма: {{ order.order_price}}</p>
    <p>Колличество продуктов: {{order.products.length}}</p>
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