<script lang="ts" setup>
import { computed, ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import CinemaForm from '@/shared/CinemaForm.vue'
import CinemaButton from '@/shared/CinemaButton.vue'
import CinemaInput from '@/shared/CinemaInput.vue'
import { writeUserInfo } from '@/shared/services/writeUser'

const userData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const isConfirmedPassword = computed(
  () => (userData.value.password === userData.value.confirmPassword)
        && userData.value.password.length > 0 && userData.value.confirmPassword.length > 0,
)

const auth = getAuth()

function send(): void {
  createUserWithEmailAndPassword(auth, userData.value.email, userData.value.password)
    .then(() => {
      if (!auth.currentUser) return
      writeUserInfo(userData.value, auth.currentUser.uid)
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
      <CinemaInput v-model:input-value="userData.name" placeholder="Name" type="text" />
      <CinemaInput v-model:input-value="userData.email" placeholder="Email" type="text" />
      <CinemaInput v-model:input-value="userData.password" placeholder="Password" type="password" />
      <CinemaInput v-model:input-value="userData.confirmPassword" placeholder="Confirm password" type="password" />
    </template>
    <template #actions>
      <CinemaButton :disabled="!isConfirmedPassword" @click="send">
        Send
      </CinemaButton>
    </template>
  </CinemaForm>
</template>
