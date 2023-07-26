import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<Record<string, unknown> | null>(null)

  function setUser(newUser: Record<string, unknown>) {
    user.value = newUser
  }

  const getUser = computed(() => user.value)

  return {
    getUser,
    setUser,
  }
})
