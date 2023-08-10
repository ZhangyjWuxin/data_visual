import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用插件
import 'lib-flexible/flexible'
// import * as echarts from 'echarts'

createApp(App).use(store).use(router).mount('#app')
