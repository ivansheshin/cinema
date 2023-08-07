<script lang="ts" setup>
import {
  child, get, getDatabase, ref as firebaseRef,
} from 'firebase/database'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { IUser } from '@/shared/types/user'

const route = useRoute()

const user = ref<IUser>()

const dbRef = firebaseRef(getDatabase())
onMounted(() => {
  get(child(dbRef, `users/${route.params.id}`)).then((snapshot) => {
    user.value = snapshot.val()
  })
})
</script>

<template>
  <div>
    <h1>Profile Page</h1>
    <p v-if="user">
      {{ user.name }}
    </p>
  </div>
</template>
