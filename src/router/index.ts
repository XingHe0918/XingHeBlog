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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/articleClassification',
      name: 'articleClassification',
      component: () => import('../views/articleClassification/articleClassification.vue'),
      children:[
        {
          path:'/previewPage',
          name:'/previewPage',
          component: () => import('../views/articleClassification/previewPage/previewPage.vue')
        }
      ]
    }
  ]
})

export default router
