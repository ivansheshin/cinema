import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/app/providers/firebase'

import './styles/index.css'

import router from './providers/router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const app = createApp(App)

app
  .use(createPinia())
  .use(router)
