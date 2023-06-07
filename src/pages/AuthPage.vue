<script lang="ts" setup>

import AuthForm from '@/features/AuthForm.vue'
</script>

<template>
  <section class="auth-page">
    <AuthForm class="auth-form" />
  </section>
</template>

<style lang="css" scoped>
.auth-page {
  background-color: red;

  .auth-form {
    position: absolute;
    top: 25%;
    left: calc(50% - 25vw);
    width: 50vw;

    @media (width >= 1280px) {
      left: calc(50% - 400px);
      max-width: 800px;
    }
  }
}
</style>
