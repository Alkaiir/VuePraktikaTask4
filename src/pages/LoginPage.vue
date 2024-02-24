<script>
import {defineComponent} from "vue";
import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  components: {LoginForm}
})


</script>

<template>
  <login-form class="form"></login-form>
</template>

<style scoped>
.form{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>