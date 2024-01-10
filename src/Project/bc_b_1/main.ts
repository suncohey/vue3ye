/*
 * @Author: sunguohui
 * @Date: 2024-01-09 21:44:42
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-10 12:28:17
 * @FilePath: \vue3ye\src\Project\bc_pcbc_1\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
