<script>
export default {
  props: {
    item: Object
  }
}
</script>

<template>
  <div class="card">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <p><strong>{{ item.price }}</strong></p>
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