/*
 * @Author: sunguohui
 * @Date: 2024-01-06 17:10:54
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-10 13:27:04
 * @FilePath: \vue3ye\src\Project\bc_a_1\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
console.log('🐯🐯 ~ file: index.ts:22 ~ import.meta.env.BASE_URL:', import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory('/h5_release_1/bc_a_1'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
