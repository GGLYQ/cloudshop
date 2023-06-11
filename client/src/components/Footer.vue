<template>
 <van-tabbar route v-model="active" active-color="#f86c35">
  <van-tabbar-item replace to="/home" icon="wap-home-o">主页</van-tabbar-item>
  <van-tabbar-item replace to="/category" icon="filter-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>

</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style lang="less" scoped>

</style>