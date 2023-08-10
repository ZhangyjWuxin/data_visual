<script setup>
import { inject, onMounted, reactive } from 'vue'
const echarts = inject('echarts')
const axios = inject('axios')
let datas = reactive({})
let xdatas = reactive([])
let ydatas = reactive([])
async function getState () {
  datas = await axios({ url: '/one/data' })
  console.log(datas)
}
// 请求数据
function setData () {
  xdatas = datas.data.chartOne.chartData.map(v => v.title)
  ydatas = datas.data.chartOne.chartData.map(v => v.num)
  console.log('xdatas', xdatas)
  console.log('ydatas', ydatas)
}
onMounted(() => {
  const myChart = echarts.init(document.querySelector('.chart1'))
  //   调用请求
  getState().then(() => {
    setData()
    myChart.setOption({
      tooltip: {
        show: true,
        backgroundColor: '#e6b600'
      },
      // 设置图表样式
      grid: {
        top: '3%',
        left: '1%',
        right: '6%',
        bottom: '3%',
        // 包含文字
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        data: xdatas,
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          data: ydatas,
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: [0, 20, 20, 0],
              // 数据条渐进色变化
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                  offset: 0,
                  color: '#005eaa'
                },
                {
                  offset: 0.5,
                  color: '#339ca8'
                },
                {
                  offset: 1,
                  color: '#cda819'
                }]
              )
            }
          }
        }
      ]
    })
  })
})
</script>
<template>
    <div>
        <h2>家电销售量</h2>
        <div class="chart1">
            <!-- 表的容器 -->
        </div>
    </div>
</template>
<style scoped>
.chart1{
    height: 4.5rem;
}
h2{
    height: .6rem;
    color: white;
    line-height: .6rem;
    font-size: .25rem;
    text-align: center;
}
</style>
