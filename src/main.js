import './assets/main.css'
import './assets/js/demo.min.js'
import './assets/js/tabler.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
