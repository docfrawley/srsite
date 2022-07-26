import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//global styles
import './assets/main.css'

// firebase imports
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const pinia = createPinia()
let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).use(pinia).mount('#app')
  }
})