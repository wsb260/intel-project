export default {
    // 柱状图
    BarOption: () => {
        return {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
    },
    // 折线图
    LineOption: () => {
        return {
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
        }
    }
}