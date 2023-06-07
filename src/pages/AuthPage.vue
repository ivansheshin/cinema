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
    top: 50%;
    left: 50%;
  }
}
</style>
