<!--
 * @Author: sunguohui
 * @Date: 2023-07-03 10:59:29
 * @LastEditors: sunguohui
 * @LastEditTime: 2023-08-23 15:57:11
 * @FilePath: \Code\scripts\template-ts\views\HomeView.vue
 * @Description: HomeView
-->
<template>
  <nav-com>
    <template #title>
      navTitle
    </template>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </nav-com>
  <div class="HomeView">
    HomeViewd<i></i>
  </div>
  <foot-com disabled="right">
    <template #left> left </template>
    <template #left-loading>
      <van-loading type="spinner" size="20px" color="#fff" />
      加载中
    </template>
    <template #right> right </template>
  </foot-com>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ThisName',
  props: {},
  setup (_props, _ctx) {
    return {
    };
  }
});
</script>

<style scoped>
.HomeView{
  background-color: rgb(7, 248, 11);
}
.HomeView i{
  background-color: rgba(220, 9, 9, 0.667);
}
</style>
