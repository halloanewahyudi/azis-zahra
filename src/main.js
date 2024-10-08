import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './firebase.js';
import './style.css'
import router from './router.js'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
