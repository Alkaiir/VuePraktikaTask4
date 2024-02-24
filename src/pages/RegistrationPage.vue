<script>
import RegistrationForm from "../components/RegistrationForm.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {RegistrationForm}
})

</script>

<template>
  <registration-form class="form"></registration-form>
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