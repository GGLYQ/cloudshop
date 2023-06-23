<template>
  <div class="home-header">
    <van-icon name="arrow-left" color="#fff" size="30px" @click="leftClick"/>
    <div class="header-search" @click="goSearch">
      <router-Link class="search-title">义务购，放心购</router-Link>
      <i class="iconfont icon-zhaoxiangji"></i>
    </div>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router=useRouter()
const leftClick=()=>{
  router.push('/home')
}
</script>

<style lang="less" scoped>
.home-header {
  width: 100%;
  height: 50px;
  background: #f86c35;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .header-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #232326;
    background: rgba(255, 255, 255);
    border-radius: 10px;
    line-height: 20px;
    padding: 0 10px;

    .search-title {
      padding: 5px 50px;
    }

    .icon-zhaoxiangji {
      color: #9c9c9c;
      font-size: 23px;
    }
  }

  .icon-sousuo {
    color: #ffffff;
    font-size: 25px;
  }
}
</style>