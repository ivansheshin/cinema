<script lang="ts" setup>
import { ref } from 'vue'
import CinemaForm from '@/entities/CinemaForm.vue'

const login = ref('')
const password = ref('')
</script>

<template>
  <CinemaForm>
    <template #title>
      Авторизация
    </template>
    <input v-model="login" type="text">
    <input v-model="password" type="password">
    <button type="button">
      Отправить
    </button>
  </CinemaForm>
</template>
