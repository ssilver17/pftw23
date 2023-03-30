import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Alpaca from "../views/Alpaca.vue"
import Llama from "../views/Llama.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alpaca',
      name: 'alpaca',
      component: Alpaca
    },
    {
      path: './llama',
      name: 'llama',
      component: 'Llama'
    }
  ]
})

export default router
