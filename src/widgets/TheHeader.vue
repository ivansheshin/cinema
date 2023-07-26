<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const { getUser } = storeToRefs(useUserStore())
</script>

<template>
  <header class="header">
    <router-link active-class="active" class="auth" to="/">
      Cinema
    </router-link>
    <nav>
      <ul class="nav-list">
        <li v-if="true">
          <router-link
            active-class="active"
            class="auth"
            no-prefetch
            to="/auth"
          >
            Authorization
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/films'"
            active-class="active"
            class="auth"
            no-prefetch
          >
            Films
          </router-link>
        </li>
        <li v-if="true">
          <router-link
            active-class="active"
            class="auth"
            no-prefetch
            to="/lk"
          >
            Profile
          </router-link>
        </li>
        <li v-if="true">
          <router-link
            active-class="active"
            class="auth"
            no-prefetch
            to="/register"
          >
            Register
          </router-link>
        </li>
        <li v-if="getUser">
          <button class="auth">
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
