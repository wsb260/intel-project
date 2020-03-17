<template>
  <!-- <div> -->
    <div id="lineChart" :style="style"></div>
  <!-- </div> -->
</template>
<script>
export default {
  name: 'lineChart',
  data() {
    return {
      title: '折线图',
      chart:''
    }
  },
  props:{
      width:{
          type:String,
          default:"100%"
      },
      height:{
          type:String,
          default:"300px"
      }
  },
  computed:{
      style() {
          let width = this.width;
          let height = this.height;
          return { width,height }
      }
  },
  mounted(){
    this.drawLineChart()
  },
  methods: {
    drawLineChart(){
      this.chart = this.$echarts.init(document.getElementById('lineChart'))
      // 绘制图表
      this.chart.setOption({
        label:{
          normal:{
            show: true,
            textStyle:{color:'#d27d39',fontSize:"18"},
            position: 'top'
          },
        },
        tooltip: {
          tirgger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: 30,
          right: 30,
          top: 20,
          bottom: 40
        },
        xAxis: {
          type: 'category',
          data: ['5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19'],
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      });
      window.addEventListener('resize',this.chart.resize)
    }
  }
}
</script>
<style lang="less" scoped>
#lineChart{
  padding: 0 20px;
}
</style>