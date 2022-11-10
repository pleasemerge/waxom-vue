import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Styles
import './assets/css/index.css'
// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faFilter, faTimes, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const VueScrollTo = require('vue-scrollto')
library.add(faBars, faFilter, faTimes, faCartArrowDown)

const app = createApp(App)


app.config.globalProperties.$publicPath = process.env.BASE_URL
app.use(store)
app.use(router)
app.use(VueScrollTo, {
  offset: -100
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
