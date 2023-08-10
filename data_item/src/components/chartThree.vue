<script setup>
import { inject, onMounted, reactive } from 'vue'
const echarts = inject('echarts')
const axios = inject('axios')
let datas = reactive({})
async function getState () {
  datas = await axios({ url: '/three/data' })
}
onMounted(() => {
  getState().then(() => {
    console.log('饼状图', datas.data.chartThree.chartData)
    const myChart = echarts.init(document.querySelector('.chart3'))
    myChart.setOption({
      legend: {
        top: 'bottom'// 改在底部
      },
      tooltip: {
        show: true,
        backgroundColor: '#e6b600'
      },
      series: [
        {
          type: 'pie',
          data: datas.data.chartThree.chartData,
          radius: [10, 80],
          center: ['50%', '45%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 10
          }
        }
      ]
    })
  })
})
</script>
<template>
    <div>
        <h2>库存统计</h2>
        <div class="chart3">
                <!-- 表的容器 -->
        </div>
    </div>
</template>
<style scoped>
.chart3{
  height:4.5rem
}
h2{
    height: .6rem;
    color: white;
    line-height: .6rem;
    font-size: .25rem;
    text-align: center;
}
</style>
