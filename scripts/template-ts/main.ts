import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 返回
import backHandler from '../../plugins/backHandler';

if ((window as any).VERSION === 'debug') {
  new (window as any).VConsole();
}

const app = createApp(App);

app.use(backHandler, router);
app.use(router);
app.mount('#app');
