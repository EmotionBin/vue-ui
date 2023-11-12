import { createApp } from 'vue';
import App from './App.vue';
import VueUi from '../../dist/vue-ui.mjs';
import '../../dist/style.css';

// 发包后使用
// import VueUi from 'vue-ui';
// import 'vue-ui/dist/style.css';

const app = createApp(App);
app.use(VueUi).mount('#app');
