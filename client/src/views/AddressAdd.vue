<template>
  <Header title="添加收货地址" left-arrow @click-left="onClickLeft" />

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="state.name" name="姓名" label="姓名" placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]" />
      <van-field v-model="state.tel" name="电话" label="电话" placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]" />

      <van-field v-model="result" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区"
        @click="showArea = true" />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>


    </van-cell-group>

  </van-form>
</template>

<script setup>
import Header from '@/components/Header.vue'
import axios from '@/api/axios.js'
import { areaList } from '@vant/area-data';
import { ref } from 'vue';
import { reactive } from 'vue';

const searchResult = ref([]);

const state = reactive({
  name: '',
  tel: '',
  address: '',
  detail: ''
})

const result = ref('');
const showArea = ref(false);
const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  result.value = selectedOptions.map((item) => item.text).join('/');
};

</script>

<style lang="less" scoped>

</style>
