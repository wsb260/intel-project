<template>
  <div class="hello">
    <div ref="mapbox" style="width:600px;height:600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// 注册中国地图
import 'echarts/map/js/china'
import jsonp from 'jsonp'
const option = {
  title: {
    text: '疫情实时地图',
    subtext: '中车网',
    left: 'center',
    link: 'http://www.baidu.com'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [{
    name: '确诊人数',
    type: 'map', // 渲染一个地图
    map: 'china', // 渲染中国地图
    roam: true,
    label: {
      show: true,
      color: '#333',
      fontSize: 10
    },
    data: []
  }],
  visualMap: [{
    type: 'piecewise',
    show: true,
    color: ['#d94e5d', '#eac736', '#50a3ba'],
    symbolSize: 16,
    pieces: [
      { min: 10000 },
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 9 }
    ]
  }]
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getData () {
      return new Promise(function (resolve, reject) {
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
          if (!err) {
            const list = data.data.list.map(item => ({ name: item.name, value: item.value }))
            option.series[0].data = list
            resolve()
          } else {
            reject(err)
          }
        })
      })
    }
  },
  async mounted () {
    await this.getData()
    this.myChart = echarts.init(this.$refs.mapbox)
    this.myChart.setOption(option)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
