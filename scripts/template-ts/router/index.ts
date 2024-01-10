/*
 * @Author: sunguohui
 * @Date: 2023-07-03 15:04:16
 * @LastEditors: sunguohui
 * @LastEditTime: 2023-07-04 10:59:22
 * @FilePath: \vitevue\scripts\template-ts\router\index.ts
 * @Description: router
 */
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
});

router.afterEach((to) => {
  // 遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  // window.scrollTo(0, 0);
});
export default router;
