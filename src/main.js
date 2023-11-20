import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';
// RESET CSS via npm package: https://www.npmjs.com/package/the-new-css-reset
import 'the-new-css-reset/css/reset.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router);

app.mount('#app');
