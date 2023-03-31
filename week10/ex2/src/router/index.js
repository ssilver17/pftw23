import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Song from '../views/Song.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/song/:slug',
      name: 'song',
      component: Song 
    }
  ]
})

export default router
