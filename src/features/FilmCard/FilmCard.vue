<script lang="ts" setup>
import type { IFilmCard } from '@/features/FilmCard/types'

interface IProps {
  film: IFilmCard | null
}

withDefaults(defineProps<IProps>(), {
  film: null,
})

</script>

<template>
  <div v-if="film" class="film-card">
    <div class="film-card__content">
      <img
        v-if="film.logo"
        :src="film.logo"
        alt="Logo"
        width="140"
      >
      <h2 v-if="film.title">
        {{ film.title }}
      </h2>
      <p v-if="film.description" class="description">
        {{ film.description }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.film-card {
  padding: 26px;
  background-color: var(--primary-background-color);
  border: var(--primary-border);
  border-radius: 4px;

  .film-card__content {
    display: grid;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    .description {
      text-overflow: ellipsis;
    }
  }
}
</style>
