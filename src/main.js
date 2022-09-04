import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

//global styles
import './assets/main.css'

// firebase imports
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).use(pinia).mount('#app')
  }
})