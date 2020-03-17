<template>
    <div ref="chart" :style="style"></div>
</template>

<script>
import config from './config'
    export default {
        name: 'chart',
        data() {
            return {
                chart: ''
            }
        },
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height:{
                type:String,
                default:"300px"
            },
            chartType: {
                type:String
            }
        },
        computed: {
            style() {
                let width = this.width;
                let height = this.height;
                return { width,height }
            }
        },
        methods: {
            drawBarChart() {
                if(!this.chartType) return;
                let whiteOption = this.chartType.charAt(0).toUpperCase() + this.chartType.slice(1) + 'Option'
                this.chart = this.$echarts.init(this.$refs.chart)
                this.chart.setOption(config[whiteOption]())
                window.addEventListener('resize',this.chart.resize)
            }
        },
        mounted() {
            this.drawBarChart()
        },
        watch: {
            chartType() {
                this.drawBarChart()
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>