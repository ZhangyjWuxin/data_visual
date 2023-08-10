<script setup>
import { inject, onMounted, reactive } from 'vue'
const echarts = inject('echarts')
const axios = inject('axios')
let datas = reactive({})
async function getState () {
  datas = await axios({ url: '/two/data' })
}
onMounted(() => {
  getState().then(() => {
    console.log('折线图', datas.data.chartTwo.chartData)
    const myChart = echarts.init(document.querySelector('.chart2'))
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#e6b600'
          }
        }
      },
      legend: {
      },
      grid: {
        // top: '3%',
        left: '1%',
        right: '6%',
        bottom: '3%',
        // 包含文字
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: datas.data.chartTwo.chartData.day,
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
      series: [
        {
          name: '日化',
          type: 'line',
          data: datas.data.chartTwo.chartData.num.Chemicals,
          smooth: true,
          showSymbol: false,
          stack: 'Total', // 堆叠
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgb(128,255,165)'
              },
              {
                offset: 1,
                color: 'rgb(1,191,236)'
              }]
            )
          }
        },
        {
          name: '服饰',
          type: 'line',
          data: datas.data.chartTwo.chartData.num.Clothes,
          smooth: true,
          showSymbol: false,
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgb(0,221,255)'
              },
              {
                offset: 1,
                color: 'rgb(77,119,255)'
              }]
            )
          }
        },
        {
          name: '家电',
          type: 'line',
          data: datas.data.chartTwo.chartData.num.Electrical,
          smooth: true,
          showSymbol: false,
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgb(55,162,255)'
              },
              {
                offset: 1,
                color: 'rgb(116,21,219)'
              }]
            )
          }
        },
        {
          name: '数码',
          type: 'line',
          data: datas.data.chartTwo.chartData.num.digit,
          smooth: true,
          showSymbol: false,
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgb(255,0,135)'
              },
              {
                offset: 1,
                color: 'rgb(135,0,157)'
              }]
            )
          }
        },
        {
          name: '家居',
          type: 'line',
          data: datas.data.chartTwo.chartData.num.gear,
          smooth: true,
          showSymbol: false,
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgb(255,191,0)'
              },
              {
                offset: 1,
                color: 'rgb(224,62,76)'
              }]
            )
          }
        }

      ]
    })
  }
  )
}
)
</script>
<template>
    <div>
        <h2>周销量</h2>
        <div class="chart2">
                <!-- 表的容器 -->
        </div>
    </div>
</template>
<style scoped>
.chart2{
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
