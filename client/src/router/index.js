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
  },
  {
    path:'/category',
    name: 'category',
    component:()=>import('@/views/Category.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component:()=>import('@/views/Cart.vue')
  },
  {
    path:'/user',
    name: 'user',
    component:()=>import('@/views/User.vue')
  },
  {
    path:'/product/:id',
    name: 'product',
    component:()=>import('@/views/productDetail.vue') 
  },
  {
    path:'/orderSubmit',
    name: 'orderSubmit',
    component:()=>import('@/views/OrderSubmit.vue') 
  },
  {
    path:'/address',
    name: 'address',
    component:()=>import('@/views/Address.vue') 
  },
  {
    path:'/addressAdd',
    name: 'addressAdd',
    component:()=>import('@/views/AddressAdd.vue') 
  }
]

const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router