import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = initializeApp({
  databaseURL: 'https://allaggregate-default-rtdb.firebaseio.com/',
  apiKey: 'AIzaSyB8okItt1pa7YC1Ai0ZpJ_zFoEuV8F_PnE',
  authDomain: 'allaggregate.firebaseapp.com',
  projectId: 'allaggregate',
  storageBucket: 'allaggregate.appspot.com',
  messagingSenderId: '414095723031',
  appId: '1:414095723031:web:527ba769e03e062b012a52',
  measurementId: 'G-PBDJNQXRP4',
})

export default getAuth(firebaseConfig)
