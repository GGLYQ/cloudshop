<template>
  <div class="home-header">
    <van-icon name="arrow-left" color="#fff" size="30px" @click="leftClick"/>
      <van-search clear-trigger="focus" shape="round" background="#f86c35" v-model="value" placeholder="请输入搜索关键词" />
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const value = ref('');

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
  }

  .icon-sousuo {
    color: #ffffff;
    font-size: 25px;
  }
}
</style>

<style>
.van-search{
  height: 50px;
  width: 270px;
}
</style>