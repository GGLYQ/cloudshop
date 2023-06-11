import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

import 'lib-flexible/flexible'

import router from './router'

import {  ActionBar, ActionBarIcon, ActionBarButton,Tabbar, TabbarItem,Swipe, SwipeItem,Search,Icon ,Button,Form, Field, CellGroup,NavBar } from 'vant';
import 'vant/lib/index.css';

createApp(App).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Search).use(NavBar).use(Form).use(Field).use(CellGroup).use(Icon).use(Button).use(router).mount('#app')
