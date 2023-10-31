import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router';

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

/** Vue 3 Toastify */
import Vue3Toastify from 'vue3-toastify';

import '@fontsource-variable/changa';
import './assets/css/style.css';
import './assets/css/main.css';

library.add([
  faStar,
  faArrowLeftLong
])

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Vue3Toastify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')