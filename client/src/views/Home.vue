<template>
  <HomeHeader />

  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import { reactive } from 'vue';


const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
</script>

<style lang="less" scoped></style>