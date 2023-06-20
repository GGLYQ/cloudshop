<template>
  <Header title="提交订单" left-arrow @click-left="onClickLeft" />

  <div class="address-wrap" @click="gotoAddressList">
    <div class="name">
      <span>收货人：张恬</span>
      <span class="phone">13576979820</span>
    </div>
    <div class="address">
      江西省 南昌市 青山湖区 范家村
    </div>
    <van-icon name="arrow" class="arrow" />
  </div>

  <div class="goods-wrap">
    <div class="seller">
      <i class="iconfont icon-shangpu"></i>
      八宝箱包
    </div>

    <van-card num="2" price="2.00" title="商品标题" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
  
    <div class="small-calc">
      <span class="num">共2件商品 </span> 
      <span class="small-sum">小计：￥4.00</span>
    </div>
  </div>

  <div class="goods-wrap">
    <div class="seller">八宝箱包</div>
    <van-card num="2" price="2.00" title="商品标题" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
  </div>

  <van-button @click="addAddress" class="btn" type="primary" block>新增地址</van-button>
</template>

<script setup>
import Header from '@/components/Header.vue'

</script>

<style lang="less" scoped>
.address-wrap {
  background: #fff;
  font-size: 14px;
  padding: 15px;
  color: #222333;
  margin-bottom: 10px;
  position: relative;


  .name {
    font-size: 17px;
    line-height: 17px;
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;

    .phone {
      font-size: 14px;
      line-height: 14px;
    }
  }

  .address {
    font-size: 13px;
    color: #868686;
    margin: 0 20px;
  }

  .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #868686;
  }
}

.address-wrap::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: repeating-linear-gradient(-45deg, var(--van-warning-color) 0, var(--van-warning-color) 20%, transparent 0, transparent 25%, var(--van-primary-color) 0, var(--van-primary-color) 45%, transparent 0, transparent 50%);
  background-size: 80px;
  content: "";
}

.goods-wrap {
  width: 100%;

  .seller {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    padding: 0 15px;
    background: #ffffff;
    .icon-shangpu{
      color: #f86c35;
      font-size: 18px;
    }
  }
  .small-calc{
    width: 100%;
    height: 50px;
    background: #ffffff;
    margin: 5px 0 10px 0;
    font-size: 15px;
    .num{
      
    }
    .small-sum{
      color:#ff0000;
    }
  }
}

.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<style>
.van-card__content {
  padding: 10px 0 !important;
}
.van-card__price{
  color: #ff0000;
}
.van-card__title{
  font-size: 14px;
}
body{
  background: #f8f8f8;

}
</style>