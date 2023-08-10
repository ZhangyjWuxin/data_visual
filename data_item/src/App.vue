<script setup>
import * as echarts from 'echarts'
import { provide } from 'vue'
import axios from 'axios'
provide('echarts', echarts)
provide('axios', axios)
// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888'
</script>
<template>
  <router-view></router-view>
</template>

<style lang="less">
body{
  background: url("@/assets/bg.jpg") top center no-repeat;
}
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
</style>
