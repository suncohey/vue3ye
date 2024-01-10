<!--
 * @Author: sunguohui
 * @Date: 2023-07-04 14:27:06
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-02 13:43:35
 * @FilePath: \Code\scripts\template-ts\App.vue
 * @Description: app
-->
<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </nav>
  <template v-if="storeState.userInfo">
    <router-view />
    <input
      type="submit"
      value="测试"
      @click="storeState.testnum++"
    />
  </template>
  <template v-else>
    {{ loadingTxt }}
  </template>
</template>
<script lang="ts" setup>
// 全局加载题库样式
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import {
  StoreInit,
  SET_USERINFO,
  SET_BARHEIGHT,
  SET_APPINFO
} from '@/store';

import { onMounted, ref, version } from 'vue';
console.log('🚀 ~ file: App.vue:34 ~ version', version);

const loadingTxt = ref('加载中...');

// 初始化全局状态 start ================
const { storeState } = StoreInit();
// 初始化全局状态 end ================

onMounted(async () => {
  await init();
});

// 初始化信息
const init = async (): Promise<void> => {
  try {
    const tabBarHeight: number = await SET_BARHEIGHT();
    storeState.tabBarHeight = tabBarHeight;

    const AppInfo = await SET_APPINFO();
    storeState.AppInfo = AppInfo;

    const userInfo = await SET_USERINFO();
    console.log('🚀 ~ file: App.vue:58 ~ init ~ userInfo', userInfo);
    storeState.userInfo = userInfo;
  } catch (error) {
    console.log('🚀 ~ file: App.vue:61 ~ init ~ error', error);
    loadingTxt.value = String(error);
    localStorage.setItem('auth_token', '');
    // router.replace({
    //   name: 'unknowPage'
    // });
  }
};
</script>
<style lang="scss">
#app {
  @include FullScreen;
  @include flex-col;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

