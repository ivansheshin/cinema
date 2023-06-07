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

<style lang="css" scoped>
.main {
  padding-top: 50px;
}

.router-view {
  height: 100%;
  padding: 16px;

  &__fade-enter-active {
    transition: opacity 0.2s;
  }

  &__fade-leave-active {
    display: none;
    height: 0;
    overflow: hidden;
  }

  &__fade-enter-from {
    opacity: 0;
  }
}
</style>
