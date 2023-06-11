<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'

import api from './api'

const films: Ref<object | undefined> = ref()
const fetchAppData = async(): Promise<void> => {
  const data = await api.films.getFilms()

  if (data) {
    films.value = data
  }
}
onMounted(() => {
  fetchAppData()
})
</script>

<template>
  <section>
    12
  </section>
</template>

<style lang="css" scoped>

</style>
