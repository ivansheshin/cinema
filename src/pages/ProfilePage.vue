<script lang="ts" setup>
import {
  child, get, getDatabase, ref as firebaseRef, update,
} from 'firebase/database'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  getDownloadURL, getStorage, ref as firebaseRefStore, uploadBytes,
} from 'firebase/storage'
import { storeToRefs } from 'pinia'
import { IUser } from '@/shared/types/user'
import { useUserStore } from '@/shared/store/user'

const user = ref<IUser>()

const route = useRoute()
const { getUser } = storeToRefs(useUserStore())
const fileInput = ref()
const avatar = ref<string>('')
const { setCustomProperty } = useUserStore()

const storage = getStorage()
const storageRef = computed(() => firebaseRefStore(storage, `images/${route.params.id}/avatar`))
const incognitoDBRef = firebaseRefStore(storage, 'common/images/incognito.jpg')

const usedDb = computed(() => (user.value.imageUrl ? storageRef.value : incognitoDBRef))

function setAvatar() {
  if (fileInput.value.files.length > 1) return
  [avatar.value] = fileInput.value.files
}

async function getImageUrl() {
  await getDownloadURL(usedDb.value)
    .then((url) => {
      setCustomProperty('imageUrl', url)
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          // eslint-disable-next-line no-console
          console.error('File doesn\'t exist')
          break
        case 'storage/unauthorized':
          // eslint-disable-next-line no-console
          console.error('User doesn\'t have permission to access the object')
          break
        case 'storage/canceled':
          // eslint-disable-next-line no-console
          console.error('User canceled the upload')
          break
        case 'storage/unknown':
          // eslint-disable-next-line no-console
          console.error('Unknown error occurred, inspect the server response')
          break

        default:
          break
      }
    })
}

const dbRef = firebaseRef(getDatabase())

async function upload() {
  if (!avatar.value) return
  await uploadBytes(storageRef.value, avatar.value)
  const fbDb = firebaseRef(getDatabase(), `users/${route.params.id}`)
  await update(fbDb, {
    imageUrl: avatar.value.name,
  })
  await getImageUrl()
}

async function fetchAndSetUser() {
  await get(child(dbRef, `users/${route.params.id}`)).then((snapshot) => {
    user.value = snapshot.val()
  })
  await getImageUrl()
}

onMounted(() => {
  fetchAndSetUser()
})
</script>

<template>
  <div>
    <img
      v-if="getUser && getUser.imageUrl && user"
      :alt="user.name"
      :src="getUser.imageUrl"
      width="280"
    >
    <form @submit.prevent="upload">
      <div>
        <!--        TODO: add this logic to the settings page-->
        <div style="display: none">
          <input ref="fileInput" type="file" @change="setAvatar">
          <button type="button">
            Upload
          </button>
        </div>
        <p v-if="user">
          {{ user.name }}
        </p>
      </div>
    </form>
  </div>
</template>
