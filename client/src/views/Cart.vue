<template>
  <div class="header">
    <div class="title">
      购物车
      <div class="sum">共2件商品</div>
    </div>

    <div class="handle">管理</div>
  </div>

  <div class="cart-wrap">
    <div class="cart-content" v-for="item in state.cartData" :key="item.id">
      <div class="seller">
        <i class="iconfont icon-shangpu"></i>
        <span>{{ item.shop }}</span>
      </div>

      <van-checkbox-group v-model="state.result" ref="checkboxGroup">
        <van-swipe-cell>
          <van-checkbox :name="item.id" />

          <van-card price="2.00" desc="描述信息" :title="item.name" :thumb="item.imgUrl">
            <template #footer>
              <van-stepper v-model="item.num" :min="item.min" max="200" />
            </template>
          </van-card>

          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

  </div>


  <van-submit-bar class="sub-all" :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
  </van-submit-bar>


  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { reactive } from 'vue';
import axios from '@/api/axios.js'
import { onMounted } from 'vue';
import { nextTick } from 'vue';

const state = reactive({
  userData: {},
  cartData: {},
  shopData: {}
})



nextTick(async () => {
  state.userData = JSON.parse(sessionStorage.getItem('userInfo')) //拿到登录者的用户名以便查询他的购物车数据
  // console.log(state.cartData.username);  //zt
  const res = await axios.post('/cartList', {
    username: state.userData.username
  })
  // console.log(res.data);
  state.cartData=res.data;

})

//在所有购物车商品数据中找出相同店铺的商品放在
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
}

.cart-wrap {
  width: 95%;
  margin: -100px 9px 0 9px;

  .cart-content {
    width: 100%;

    background: #f8f8f8;
    border-radius: 10px;
    margin-bottom: 5px;

    .seller {
      display: inline-block;

      .icon-shangpu {
        font-size: 20px;
        color: #fb7e4d;
        margin: 8px;
      }
    }

    .delete-button {
      height: 100%;
    }

  }
}

.sub-all {
  position: fixed;
  bottom: 50px;
}
</style>

<style>
.van-swipe-cell__wrapper {
  display: flex;
  padding-left: 15px;
}

.van-checkbox {
  width: 22px;
}

.van-card {
  flex: 1;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 5px;
}

.van-card__price {
  color: red;
  font-size: 15px;
}

.van-checkbox {
  width: 60px;
}
</style>