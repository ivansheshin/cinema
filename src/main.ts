import { ComponentPublicInstance, createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/app/App.vue'
import auth from '@/app/providers/firebase'
import '@/app/styles/index.css'
import router from '@/app/providers/router'

let app: ComponentPublicInstance

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(createPinia())
      .use(router)
      .mount('#app')
  }
})
