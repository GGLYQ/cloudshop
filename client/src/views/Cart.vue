<template>
  <div class="header">
    <div class="title">
      购物车
      <div class="sum">共2件商品</div>
    </div>

    <div class="handle">管理</div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'

</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 200px;
  background: #f86c35;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
  }

  .handle {
    font-size: 13px;
  }
}</style>