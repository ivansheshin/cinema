<script lang="ts" setup>
import TheHeader from "@/widgets/TheHeader.vue";
import {getAuth} from 'firebase/auth'

console.log(getAuth())
</script>

<template>
  <TheHeader/>
  <main class="main">
    <RouterView v-slot="{ Component }" class="router-view">
      <transition name="page page__fade">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </main>

</template>

<style lang="scss" scoped>
.main {
  padding-top: 50px;
}

.page {
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

.router-view {
  height: 100%;
}
</style>
