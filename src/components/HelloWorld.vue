<!--
 * @Author: sunguohui
 * @Date: 2024-01-06 17:10:54
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-10 09:54:38
 * @FilePath: \vue3ye\src\components\HelloWorld.vue
 * @Description:
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{
  msg: string
}>()
const a = ref(window.document.title);
localStorage.removeItem('auth_token');
const FunName = (a: any): void => {
  let ac = '';
  ac = a;
  console.log('🐯🐯 ~ file: HelloWorld.vue:18 ~ FunName ~ a:', ac);

}
onMounted(async () => {
  a.value = 'cccc';
  FunName(a.value);
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <img src="/1.png" alt="components\HelloWorld.vue 组件中不会正常显示该图片" /> 2222
    <h3>
      test
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
