require('./bootstrap');

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from "vue-router";
import routes from './routes'

const app = createApp();

app.use(createRouter(routes));
app.use(createPinia())

app.mount('#app')
