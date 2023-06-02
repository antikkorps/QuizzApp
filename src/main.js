import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

//import router
import router from './router/index';

//create app variable
const app = createApp(App);

//use router in app.use
app.use(router);

//mount app
app.mount('#app');
