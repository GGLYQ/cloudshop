<template>
  <div class="home-header">
    <i class="iconfont icon-yingwen"></i>
    <div class="header-search">
      <i class="iconfont icon-sousuo"></i>
      <router-Link to="/product-list" class="search-title">物美价廉，童叟无欺</router-Link>
      <i class="iconfont icon-zhaoxiangji"></i>
    </div>
    <i class="iconfont icon-saomiao"></i>
  </div>

  <div class="nav-wrap" ref="navWrap">
    <ul class="nav-content">
      <li class="nav-item" v-for="item in navList" :key="item.id" @click="selectMenu(item.id)">
        {{ item.content }}
        <div class="sjx" :class="{ 'current': currentId === item.id }"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import BetterScroll from 'better-scroll'
import { reactive } from 'vue';
import { nextTick } from 'vue';
import { ref } from 'vue';
import useGoodsStore from '@/store/goods.js'

const navList =
  [
    {
      id: 0,
      content: '推荐'
    },
    {
      id: 1,
      content: '玩具'
    },
    {
      id: 2,
      content: '服装服饰'
    },
    {
      id: 3,
      content: '饰品'
    },
    {
      id: 4,
      content: '百货'
    },
    {
      id: 5,
      content: '鞋靴'
    },
    {
      id: 6,
      content: '箱包'
    },
    {
      id: 7,
      content: '化妆品'
    },
    {
      id: 8,
      content: '小家电'
    }
  ]

//BScroll
const navWrap = ref(null) //ref获取dom结构
let scroll = reactive({
  navScroll: {}
})
const _initScroll = () => {
  scroll.navScroll = new BetterScroll(navWrap.value, {
    click: true,
    scrollX: true,
    probeType: 3
  })
}
nextTick(() => {
  _initScroll()
})

setTimeout(() => {
  scroll.navScroll.refresh()
}, 500)

const store=useGoodsStore()
//点菜单的某一项
let currentId = ref(0)
const selectMenu = (id) => {
  // console.log(id);
  currentId.value = id
  store.changeId(id)  //使点菜单的某一项的id传给pinia组件库
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

  .icon-yingwen {
    color: #ffffff;
    font-size: 30px;
  }

  .icon-saomiao {
    color: #ffffff;
    font-size: 25px;
  }

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

    .icon-sousuo {
      color: #9c9c9c;
      font-size: 18px;
    }

    .icon-zhaoxiangji {
      color: #9c9c9c;
      font-size: 23px;
    }
  }
}

.nav-wrap {
  width: 100vw;
  height: 40px;
  background: #f86c35;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  white-space: nowrap;
  overflow: hidden;

  .nav-content {
    display: inline-block;

    .nav-item {
      display: inline-block;
      font-size: 13px;
      color: #ffffff;
      padding: 8px 15px;

      .current {
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 8px solid rgb(255, 255, 255);
        margin: 0 auto;
        transition: all .5s;
      }
    }
  }

}
</style>