<!--
 * @Author: sunguohui
 * @Date: 2023-07-04 14:27:06
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-10 10:06:10
 * @FilePath: \vue3ye\scripts\template-ts\views\AboutView.vue
 * @Description: about
-->
<template>
  <div class="main">
    AboutView <br />
    全局状态测试
    <img src="/1.png" alt="AboutView" />
    <br />
    <input
      type="submit"
      value="返回"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ThisName',
  components: {},
  props: {},
  setup () {

  }
});
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
