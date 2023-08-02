<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { getAuth } from 'firebase/auth'
import { useUserStore } from '@/stores/user'
import { authorizedNavListRoutes, unAuthorizedNavListRoutes } from '@/static/navigationList'

const { setUser } = useUserStore()

const { getUser } = storeToRefs(useUserStore())
const navList = computed(() => (getUser.value ? authorizedNavListRoutes : unAuthorizedNavListRoutes))

function logout() {
  const auth = getAuth()
  auth.signOut()
  setUser(null)
}

</script>

<template>
  <header class="header">
    <router-link active-class="active" class="auth" to="/">
      Cinema
    </router-link>
    <nav>
      <ul class="nav-list">
        <li v-for="item in navList" :key="item.name">
          <router-link
            :to="item.path"
            active-class="active"
            class="auth"
            no-prefetch
          >
            {{ item.name }}
          </router-link>
        </li>
        <li v-if="getUser">
          <button class="auth" @click="logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  padding: 0 20px;
  color: #fff;
  background-color: var(--primary-background-color);
  border-bottom: 1px solid var(--primary-border-color);
}

.nav-list {
  display: flex;
  gap: 20px;
  align-items: center;
  list-style: none;
}

.auth {
  padding: 6px 8px;
  color: #121212;
  text-decoration: none;
  background-color: #fff;
  border: none;
  transition: all 0.5s;
}

.auth:hover,
.auth:focus {
  color: #fff;
  background-color: #141414;
}
</style>
