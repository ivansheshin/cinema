<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from './api'

const params = {
  q: 'movies',
  pageSize: 10,
}

const news = ref()

async function getNews() {
  const { articles } = await api.news.getNews(params)
  if (!articles) return
  news.value = articles
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <section>
    <h1>News</h1>
    <div class="news-list">
      <div v-for="item in news" :key="item.id">
        <img
          :src="item.urlToImage"
          alt="news"
          class="img"
          height="400"
        >
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>{{ item.author }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  .img {
    object-fit: cover;
  }
}
</style>
