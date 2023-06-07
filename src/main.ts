import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'

import './assets/main.scss'

import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyB8okItt1pa7YC1Ai0ZpJ_zFoEuV8F_PnE',
  authDomain: 'allaggregate.firebaseapp.com',
  projectId: 'allaggregate',
  storageBucket: 'allaggregate.appspot.com',
  messagingSenderId: '414095723031',
  appId: '1:414095723031:web:527ba769e03e062b012a52',
  measurementId: 'G-PBDJNQXRP4',
}

initializeApp(firebaseConfig)

const app = createApp(App)

app
  .use(createPinia())
  .use(router)

app.mount('#app')
