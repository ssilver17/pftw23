import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AlbumView from "../views/AlbumView.vue"
import AlbumDetails from "../views/AlbumDetails.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/albums",
      component: AlbumView
    },
    {
      path: "/albums/:id",
      component: AlbumDetails
    }
  
  ]
})

export default router
