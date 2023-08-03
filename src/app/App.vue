<script lang="ts" setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue'
import TheHeader from '@/widgets/TheHeader.vue'
import { useUserStore } from '@/shared/store/user'

const { setUser } = useUserStore()

function firebaseAuth(): void {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user as unknown as Record<string, unknown>)
    } else {
      setUser(null)
    }
  })
}

onMounted(() => {
  firebaseAuth()
})
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
