<template>
  <Header title="收货地址" left-arrow @click-left="onClickLeft" />

  <div class="address-wrap">
    <van-address-list v-model="state.chosenAddressId" :list="state.addressData" default-tag-text="默认" @add="onAdd"
      @edit="onEdit" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios.js'
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  addressData: [],
  userData: {},
  chosenAddressId: 1
})

onMounted(async () => {
  state.userData = JSON.parse(sessionStorage.getItem('userInfo'))
  const res = await axios.post('/addressList', {
    username: state.userData.username
  })
  state.addressData = res.data
  // console.log(state.addressData);
})

//修改数据库中的新选中的isDefault字段为true 旧的修改为false
watch(() => state.chosenAddressId, async (newVal, oldVal) => {
  await axios.post('/defaultModify', {
    isDefault: 0,
    id: oldVal
  })
  await axios.post('/defaultModify', {
    isDefault: 1,
    id: newVal
  })
  state.chosenAddressId = newVal  //问题： watch内的newVal不能赋值给全局的变量
  console.log(state.chosenAddressId);
  window.history.back();
})

const onClickLeft = () => {
  window.history.back();
}

const router = useRouter()
const onAdd = () => {
  router.push('/addressAdd')
}
</script>

<style lang="less" scoped>
.address-wrap{
  margin-bottom: 50px;
}
</style>