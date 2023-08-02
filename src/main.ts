import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './plugins/firebase'

import './assets/main.css'

import router from './router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const app = createApp(App)

app
  .use(createPinia())
  .use(router)

app.mount('#app')
