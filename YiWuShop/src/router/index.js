import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name: 'home',
    component:Home
  },
  {
    path:'/login',
    name: 'login',
    component:()=>import('@/views/Login.vue')
  },
  {
    path:'/register',
    name: 'register',
    component:()=>import('@/views/Register.vue')
  }
]

const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router