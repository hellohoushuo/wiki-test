import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import createStore from './store/index'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createStore)
app.use(router)
app.mount('#app')

