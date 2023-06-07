<script lang="ts" setup>
import { getAuth } from 'firebase/auth'
import TheHeader from '@/widgets/TheHeader.vue'

console.log(getAuth())
</script>

<template>
  <TheHeader />
  <main class="main">
    <RouterView v-slot="{ Component }" class="router-view">
      <transition name="page page__fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>
