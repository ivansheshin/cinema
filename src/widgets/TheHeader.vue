<script>
export default {
  name: 'TheHeader',
}
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
            :to="'/lk'"
            active-class="active"
            class="auth"
            no-prefetch
          >
            Profile
          </router-link>
        </li>
        <li v-if="true">
          <router-link
            :to="'/register'"
            active-class="active"
            class="auth"
            no-prefetch
          >
            Register
          </router-link>
        </li>
        <li v-if="true">
          <button class="auth" @click="signOut">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
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
  background-color: #c3195d;
}

.nav-list {
  display: flex;
  gap: 20px;
  align-items: center;
  list-style: none;
}

.auth {
  padding: 6px 8px;
  color: #141414;
  text-decoration: none;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  transition: all 0.5s;
}

.auth:hover,
.auth:focus {
  color: #fff;
  background-color: #141414;
}

.active {
  background-color: red;
}
</style>
