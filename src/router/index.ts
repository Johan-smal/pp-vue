import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import GithubUsers from '../views/GithubUsers.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    name: 'users',
    component: GithubUsers,
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;


