import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

import 'lib-flexible/flexible'

import router from './router'

import { Icon ,Button,Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css';

createApp(App).use(Form).use(Field).use(CellGroup).use(Icon).use(Button).use(router).mount('#app')
