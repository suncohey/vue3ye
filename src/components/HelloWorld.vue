<!--
 * @Author: sunguohui
 * @Date: 2024-01-06 17:10:54
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-11 12:46:21
 * @FilePath: \vue3ye\src\components\HelloWorld.vue
 * @Description:
-->
<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
  msg: string
}>()

onMounted(async () => {

})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
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
