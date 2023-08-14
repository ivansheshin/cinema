import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// TODO: think about how to type this
export const useUserStore = defineStore('user', () => {
  const user = ref<Record<string | 'imageUrl', unknown> | null>(null)

  function setUser(newUser: Record<string, unknown> | null) {
    user.value = newUser
  }

  function setCustomProperty(key: string, value: unknown) {
    if (user.value) {
      user.value[key] = value
    }
  }

  const getUser = computed(() => user.value)

  return {
    getUser,
    setUser,
    setCustomProperty,
  }
})
