import { type RouteRecordRaw } from 'vue-router';
import routerConstant from '@/utils/router-constant';
import HomeView from '../views/HomeView.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: routerConstant.INDEX[0],
    component: HomeView
  },
  {
    path: '/' + routerConstant.ABOUT[0],
    name: routerConstant.ABOUT[0],
    component: async () => await import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/' + routerConstant.NONEPAGE[0],
    name: routerConstant.NONEPAGE[0],
    component: async () => await import(/* webpackChunkName: "404" */ '../../../views/404/index.vue')
  },
  // 404 page must be placed at the end !!!
  { path: '/:pathMatch(.*)', redirect: '/' + routerConstant.NONEPAGE[0] }
];
