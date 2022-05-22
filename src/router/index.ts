import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;


