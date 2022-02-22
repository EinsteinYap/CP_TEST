import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CPTestView from '../views/CPTestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cptest',
    name: 'cptest',
    component: CPTestView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
