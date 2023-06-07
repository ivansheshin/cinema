<script lang="ts" setup>
import { ref } from 'vue'
import CinemaForm from '@/entities/CinemaForm.vue'

const login = ref('')
const password = ref('')
</script>

<template>
  <CinemaForm>
    <template #title>
      <h3>Авторизация</h3>
    </template>
    <template #fields>
      <input
        id="login"
        v-model="login"
        placeholder="Login"
        type="text"
      >
      <input
        v-model="password"
        placeholder="Password"
        type="password"
      >
    </template>
    <template #actions>
      <button type="button">
        Отправить
      </button>
    </template>
  </CinemaForm>
</template>
