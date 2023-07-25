<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from './api'
import { IFilm, ISearchParams } from './types'
import CinemaFilmCard from '@/features/FilmCard/FilmCard.vue'

const params: ISearchParams = {
  page: 1,
}

const films = ref<IFilm[] | undefined>()

async function getFilms() {
  const data = await api.films.getFilm(params)

  if (!data) return

  films.value = data.docs.map((film: Record<string, any>) => ({
    id: film.id,
    title: film.name,
    description: film.shortDescription,
    logo: film.poster.url,
  }))
}

onMounted(() => {
  getFilms()
})
</script>

<template>
  <div v-if="films && films.length" class="films-list">
    <CinemaFilmCard
      v-for="film in films"
      :key="film.id"
      :film="film"
      class="films-list__card"
    />
  </div>
</template>

<style lang="css" scoped>
.films-list {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 28px;

  .films-list__card {
    width: 100%;
    height: 500px;
  }
}
</style>
