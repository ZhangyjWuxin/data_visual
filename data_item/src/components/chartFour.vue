<script setup>
import { inject, onMounted, reactive } from 'vue'
const echarts = inject('echarts')
const axios = inject('axios')
let datas = reactive({})
async function getState () {
  datas = await axios({ url: '/four/data' })
}
onMounted(() => {
  getState().then(() => {
    console.log('柱状图', datas.data.chartFour.chartData)
    const myChart = echarts.init(document.querySelector('.chart4'))
    myChart.setOption({
      grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        // 包含文字
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: datas.data.chartFour.chartData.day,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      series: [
        {
          name: '日化',
          type: 'bar',
          data: datas.data.chartFour.chartData.num.Chemicals,
          stack: 'total', // 堆叠
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '服饰',
          type: 'bar',
          data: datas.data.chartFour.chartData.num.Clothes,
          stack: 'total', // 堆叠
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '家电',
          type: 'bar',
          data: datas.data.chartFour.chartData.num.Electrical,
          stack: 'total', // 堆叠
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '数码',
          type: 'bar',
          data: datas.data.chartFour.chartData.num.digit,
          stack: 'total', // 堆叠
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '家居',
          type: 'bar',
          data: datas.data.chartFour.chartData.num.gear,
          stack: 'total', // 堆叠
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        }
      ]
    })
  })
})
</script>
<template>
    <div>
        <h2>库存统计图</h2>
        <div class="chart4">
                <!-- 表的容器 -->
        </div>
    </div>
</template>
<style scoped>
.chart4{
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
