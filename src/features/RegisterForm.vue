<script lang="ts" setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import CinemaForm from '@/entities/CinemaForm.vue'
import CinemaButton from '@/entities/CinemaButton.vue'
import CinemaInput from '@/entities/CinemaInput.vue'

const email = ref<string>('')
const password = ref<string>('')

const auth = getAuth()

function send(): void {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const { user } = userCredential
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <CinemaForm>
    <template #title>
      <h3>Registration</h3>
    </template>
    <template #fields>
      <CinemaInput v-model:input-value="email" placeholder="Login" type="text" />
      <CinemaInput v-model:input-value="password" placeholder="Password" type="password" />
    </template>
    <template #actions>
      <CinemaButton @click="send">
        Send
      </CinemaButton>
    </template>
  </CinemaForm>
</template>
