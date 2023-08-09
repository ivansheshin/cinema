<script lang="ts" setup>
import {
  child, get, getDatabase, ref as firebaseRef,
} from 'firebase/database'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  getDownloadURL, getStorage, ref as firebaseRefStore, uploadBytes,
} from 'firebase/storage'
import { IUser } from '@/shared/types/user'

const route = useRoute()

const fileInput = ref()
const avatar = ref<string>('')
const imageUrl = ref<string>()

const storage = getStorage()
const storageRef = firebaseRefStore(storage, `images/${route.params.id}/${avatar.value.name}`)

function setAvatar() {
  // eslint-disable-next-line prefer-destructuring
  avatar.value = fileInput.value.files[0]
}

async function upload() {
  await uploadBytes(storageRef, avatar.value)

  await getDownloadURL(storageRef)
    .then((url) => {
      imageUrl.value = url
      console.log(imageUrl.value)
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          alert('File doesn\'t exist')
          break
        case 'storage/unauthorized':
          alert('User doesn\'t have permission to access the object')
          break
        case 'storage/canceled':
          alert('User canceled the upload')
          break
        case 'storage/unknown':
          alert('Unknown error occurred, inspect the server response')
          break

        default:
          break
      }
    })
}

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
    <form @submit.prevent="upload">
      <input ref="fileInput" type="file" @change="setAvatar">
      <button>
        Upload
      </button>
      <img :src="imageUrl">
    </form>
  </div>
</template>
