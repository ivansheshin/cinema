<script lang="ts" setup>
import { ref } from 'vue'
import CinemaForm from '@/entities/CinemaForm.vue'
import CinemaButton from '@/entities/CinemaButton.vue'
import CinemaInput from '@/entities/CinemaInput.vue'

const login = ref('')
const password = ref('')

function send() {
  console.log(1)
}
</script>

<template>
  <CinemaForm>
    <template #title>
      <h3>Авторизация</h3>
    </template>
    <template #fields>
      <CinemaInput v-model="login" placeholder="Login" type="text" />
      <CinemaInput v-model="password" placeholder="Password" type="password" />
    </template>
    <template #actions>
      <CinemaButton @click="send">
        Send
      </CinemaButton>
    </template>
  </CinemaForm>
</template>
