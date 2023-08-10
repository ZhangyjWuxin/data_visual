<script setup>
import { inject, onMounted, reactive } from 'vue'
const axios = inject('axios')
let mapData = reactive({})
const echarts = inject('echarts')
async function getState () {
  mapData = await axios.get('/map/data')
}
onMounted(() => {
  getState().then(() => {
    console.log('map', mapData)
    echarts.registerMap('china', mapData.data.chartMap)
    const myChart = echarts.init(document.querySelector('.map'))
    myChart.setOption({
      // 大地图样式设置
      geo: {
        map: 'china',
        itemStyle: {
          areaColor: 'rgb(52, 73, 206)',
          borderColor: '#0099ff',
          shadowColor: 'rgba(76, 81, 144,.1)',
          shadowBlur: 30,
          emphasis: {
            focus: 'self'
          }
        }
      },
      //   散点图设置
      tooltip: {
        trigger: 'item',
        backgroundColor: '#e6b600'
      },
      title: {
        text: '城市销量',
        left: '45%',
        textStyle: {
          color: '#fff',
          fontSize: 20,
          textShadowBlur: 10,
          textShadowColor: 'rgb(199,199,132)'

        }
      },
      visualMap: {
        type: 'continuous',
        min: 100,
        max: 8000,
        calculable: true,
        inRange: {
          color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
          color: '#fff'
        }
      },
      series: [{
        type: 'scatter',
        itemStyle: {
          color: 'red'
        },
        coordinateSystem: 'geo',
        data: [
          { name: '上海', value: [121.48, 31.22, 8675] },
          { name: '北京', value: [116.46, 39.92, 4367] },
          { name: '深圳', value: [114.07, 22.62, 2461] },
          { name: '广州', value: [113.23, 23.16, 187] },
          { name: '西安', value: [108.45, 34, 3421] }
        ]
      }]
    })
  })
})
const components = {
  getState,
  mapData,
  echarts
}
console.log(components)
</script>
<template>
<div class="map">

</div>
</template>
<style>
.map{
    height: 100%;
    width: 100%;

}
</style>
