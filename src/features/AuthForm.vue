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
    <template #fields>
      <input v-model="login" placeholder="login" type="text">
      <input v-model="password" placeholder="password" type="password">
    </template>
    <template #actions>
      <button type="button">
        Отправить
      </button>
    </template>
  </CinemaForm>
</template>
