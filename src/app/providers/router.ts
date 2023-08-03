import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      title: 'Home Page',
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/pages/AuthPage.vue'),
    meta: {
      title: 'Authorization Page',
    },
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import('@/pages/FilmsPage.vue'),
    meta: {
      title: 'Films Page',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/RegisterPage.vue'),
    meta: {
      title: 'Register Page',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
