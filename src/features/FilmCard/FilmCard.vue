<script lang="ts" setup>
import CinemaCard from '@/entities/CinemaCard.vue'
import type { IFilmCard } from '@/features/FilmCard/types'

interface IProps {
  film: IFilmCard | null
}

withDefaults(defineProps<IProps>(), {
  film: null,
})

</script>

<template>
  <CinemaCard v-if="film">
    <template v-if="film.logo" #logo>
      <img :src="film.logo" alt="Logo" width="140">
    </template>
    <template v-if="film.title" #title>
      <h2>{{ film.title }}</h2>
    </template>
    <template v-if="film.description" #description>
      <p class="description">
        {{ film.description }}
      </p>
    </template>
  </CinemaCard>
</template>

<style lang="css" scoped>
.description {
  text-overflow: ellipsis;
}
</style>
