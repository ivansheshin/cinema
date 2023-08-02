<script lang="ts" setup>
import RegisterForm from '@/features/RegisterForm.vue'
</script>

<template>
  <section class="register-page">
    <RegisterForm class="register-form" />
  </section>
</template>

<style lang="css" scoped>
.register-page {
  .register-form {
    width: 100%;

    @media (width >= 600px) {
      position: absolute;
      top: 25%;
      left: calc(50% - 25vw);
      width: 50vw;
    }

    @media (width >= 1280px) {
      left: calc(50% - 250px);
      max-width: 500px;
    }
  }
}
</style>
