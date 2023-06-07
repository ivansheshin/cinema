<template>
    <section class="auth-page">
        <AuthPage/>
    </section>
</template>

<script>

import {ref} from "vue";

export default {
  name: "AuthPage",
  setup() {
    const login = ref('')

    return {
      login
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-page {
  background-color: red;
}
</style>
