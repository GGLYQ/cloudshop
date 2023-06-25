<template>
     <Header :title="searchTitle" left-arrow @click-left="onClickLeft" />

</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue';
import {  useRoute, useRouter } from 'vue-router';

const searchTitle=ref('')
const router=useRouter()
const route=useRoute()
searchTitle.value=route.query.name;

const onClickLeft=()=>{
  window.history.back();
}
</script>

<style lang="less" scoped>

</style>