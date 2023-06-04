<template>
  <Header>
    <div class="head">
      <div class="cross">
        <van-icon name="cross" color="#fff" size="18px" />
      </div>
      <div class="register">
        注册
      </div>
    </div>

    <div class="login">用户登录</div>
  </Header>

  <div class="login-wrap">
    <div class="title">
      账号密码登录
    </div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block color="#f86c35" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

  </div>

  <div class="footer">
    <i class="iconfont icon-weixin"></i>icon-weixin
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
Header {
  height: 200px;
  width: 100%;
  background-image: url('../assets/images/1.jpg');

  .head {
    height: 50px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .register {
      color: #efefef;
      font-size: 17px;
    }
  }

  .login {
    width: 100%;
    color: #efefef;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
  }
}

.login-wrap {
  width: 90%;
  height: 230px;
  background: #fff;
  border-radius: 3%;
  box-shadow: 0 0 0 3px #efefef;
  margin: 0 auto;
  margin-top: -90px;
  .title{
    color:#373737;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    padding-bottom: 30px;
    padding-top: 20px;
  }
 
}
</style>