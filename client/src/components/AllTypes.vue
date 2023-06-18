<template>
  
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async()=>{
  const goodsData=await axios.get('/type')
  console.log(goodsData);
})
</script>

<style lang="less" scoped></style>