

<template>
  <div>
      <select id="select" @change="selectChange">
        <option value="1">算法1</option>
        <option value="2">算法2</option>
        <option value="3">算法3</option>
        <option value="4">算法4</option>
        <option value="all">所有预测</option>
      </select>
      <div id="echarts"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      lineArr: ['', '', '', '', 1290, 1300, 1303],
      myChart: '',
      option: {}
    }
  },
  methods: {
    selectChange () {
      let _this = this
      let curSel = document.getElementById('select')
      let index = curSel.selectedIndex
      let val = curSel.options[index].value // 获取选中值
      console.log(val)
      _this.myChart.clear()
      _this.myChart.setOption(_this.option)
      if (val === '1') {
        let arr = [1300, 1303]
        _this.lineArr = _this.lineArr.slice(0, 5).concat(arr)
        _this.myChart.setOption({
          series: [{
            data: [820, 932, 901, 934, 1290],
            type: 'line',
            color: ['#d5ae10']
          },
          {
            data: _this.lineArr,
            type: 'line',
            color: ['#00FF00']
          }]
        })
      }
      if (val === '2') {
        let arr = [1260, 1222]
        _this.lineArr = _this.lineArr.slice(0, 5).concat(arr)
        _this.myChart.setOption({
          series: [{
            data: [820, 932, 901, 934, 1290],
            type: 'line',
            color: ['#d5ae10']
          },
          {
            data: _this.lineArr,
            type: 'line',
            color: ['#00f']
          }]
        })
      }
      if (val === '3') {
        let arr = [1350, 1400]
        _this.lineArr = _this.lineArr.slice(0, 5).concat(arr)
        _this.myChart.setOption({
          series: [{
            data: [820, 932, 901, 934, 1290],
            type: 'line',
            color: ['#d5ae10']
          },
          {
            data: _this.lineArr,
            type: 'line',
            color: ['#000']
          }]
        })
      }
      if (val === '4') {
        let arr = [1200, 1240]
        _this.lineArr = _this.lineArr.slice(0, 5).concat(arr)
        _this.myChart.setOption({
          series: [{
            data: [820, 932, 901, 934, 1290],
            type: 'line',
            color: ['#d5ae10']
          },
          {
            data: _this.lineArr,
            type: 'line',
            color: ['#f00']
          }]
        })
      }

      if (val === 'all') {
        _this.myChart.setOption({
          series: [{
            data: [820, 932, 901, 934, 1290],
            type: 'line',
            color: ['#d5ae10']
          },
          {
            data: ['', '', '', '', 1290, 1300, 1303],
            type: 'line',
            color: ['#0f0']
          },
          {
            data: ['', '', '', '', 1290, 1260, 1222],
            type: 'line',
            color: ['#00f']
          },
          {
            data: ['', '', '', '', 1290, 1350, 1400],
            type: 'line',
            color: ['#000']
          },
          {
            data: ['', '', '', '', 1290, 1000, 1020],
            type: 'line',
            color: ['#f00']
          }]
        })
      }
    },
    initEcharts () {
      let _this = this
      _this.myChart = this.$echarts.init(document.getElementById('echarts'))
      _this.option = {
        title: {
          text: '一周数据预测',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290],
          type: 'line',
          color: ['#d5ae10']
        },
        {
          data: _this.lineArr,
          type: 'line',
          color: ['#00FF00']
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      _this.myChart.setOption(_this.option)
    }
  },
  mounted () {
    this.initEcharts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
select{
  width: 150px;
  height: 35px;
  border-radius: 8px;
}
#echarts{
    width:500px;
    height: 400px;
    margin: 20px auto;
  }
</style>
