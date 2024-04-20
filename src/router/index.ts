import { createRouter, createWebHistory } from 'vue-router'
import HomePageIndex from '../views/homePage/homePageIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePageIndex',
      component: HomePageIndex,
      children:[
        // {
        //   path: '/home',
        //   name: 'home',
        //   component: () => import('../views/homePage/home.vue')
        // }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
