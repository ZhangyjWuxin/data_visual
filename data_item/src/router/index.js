import { createRouter, createWebHashHistory } from 'vue-router'
import Page from '@/views/homePage.vue'
const routes = [
  {
    path: '/page',
    component: Page
  },
  {
    path: '/',
    // 默认页面
    redirect: '/page'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
