<template>
  <Header title="分类" />

  <van-tree-select v-model:active-id="activeId" v-model:main-active-index="activeIndex" :items="items" />

  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { ref } from 'vue';

const activeId = ref(1);
const activeIndex = ref(0);
const items = [
  {
    text: '化妆品',
    children: [
      { text: '口红', id: 1 },
      { text: '眉笔', id: 2 },
      { text: '眼影', id: 3 },
      { text: '化妆刷', id: 4 },
      { text: '化妆镜', id: 5 }
    ],
  },
  {
    text: '药品',
    children: [
      { text: '风油精', id: 6 },
      { text: '清凉油', id: 7 }
    ],
  },
  {
    text: '地摊挑货',
    children: [
      { text: '灭蚊灯', id: 8 },
      { text: '手链', id: 9 },
      { text: '拖鞋', id: 10 },
    ],
  },
  {
    text: '玩具',
    children: [
      { text: '公仔', id: 11 },
      { text: '玩具枪', id: 12 },
      { text: '陀螺', id: 13 },
    ],
  },
  {
    text: '饰品',
    children: [
      { text: '耳环', id: 14 },
      { text: '耳钉', id: 15 },
      { text: '戒指', id: 16 },
    ],
  },
  {
    text: '袜类',
    children: [
      { text: '船袜', id: 17 },
      { text: '丝袜', id: 18 },
      { text: '裤袜', id: 19 },
    ],
  },
  {
    text: '厨卫',
    children: [
      { text: '菜板', id: 20 },
      { text: '围裙', id: 21 },
      { text: '抹布', id: 22 },
    ],
  },
  {
    text: '服饰',
    children: [
      { text: 'T恤', id: 23 },
      { text: '牛仔裤', id: 24 },
      { text: '裙子', id: 25 },
    ],
  },
  {
    text: '办公文教',
    children: [
      { text: '铅笔', id: 4 },
      { text: '粉笔', id: 5 },
      { text: '钢笔', id: 6 },
    ],
  },
  {
    text: '体育用品',
    children: [
      { text: '篮球', id: 4 },
      { text: '乒乓球', id: 5 },
      { text: '排球', id: 6 },
    ],
  },
  {
    text: '箱包',
    children: [
      { text: '皮包', id: 4 },
      { text: '布包', id: 5 },
      { text: '化妆包', id: 6 },
    ],
  },
  {
    text: '家电',
    children: [
      { text: '床', id: 4 },
      { text: '电视机', id: 5 },
      { text: '空调', id: 6 },
    ],
  },
  {
    text: '数码',
    children: [
      { text: '手机', id: 4 },
      { text: '鼠标', id: 5 },
      { text: '相机', id: 6 },
    ],
  },
  {
    text: '母婴',
    children: [
      { text: '奶瓶', id: 4 },
      { text: '纸尿裤', id: 5 },
      { text: '婴儿床', id: 6 },
    ],
  }
];

</script>

<style lang="less" scoped></style>

<style>
.van-tree-select {
  height: 580px !important;
}
</style>