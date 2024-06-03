import { createRouter, createWebHistory } from 'vue-router'
import ToursView from '../views/ToursView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToursView,
    },
  ],
})

export default router
