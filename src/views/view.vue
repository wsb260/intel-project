<template>
    <div class="view-content">
        <Row>
            <Button type="primary" @click="()=>this.$router.go(-1)">返回</Button>
        </Row>
        <Row type="flex" class="view-row" v-for="(row,index) in wigetData" :key="index">
            <Col :span="row.length | formatItem" class="view-col" v-for="(item,itdex) in row" :key="itdex">
                <!-- <ChartTrend :chartType="item.config && item.config.style"></ChartTrend> -->
                <compList :render="render" :item="item"></compList>
            </Col>
        </Row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import compList from './compList'
import { findOneLayout } from '../api/service/eidt';
    export default {
        name: '',
        components:{
            compList
        },
        data() {
            return {
                wigetData:[]
            }
        },
        computed:{
            ...mapState('edit',{
                dashBoard: state => state.dashBoard
            })
        },
        methods:{
            add(va) {
                console.log(va)
            },
            // 动态渲染函数
            render(h,data) {
                console.log(data)
                return <ChartTrend chartType={ data.config && data.config.style }></ChartTrend>
            }
        },
        filters: {
            formatItem: function(value) {
                if(value === 0) {
                    return 24
                } else {
                    return 24 / value
                }
            }
        },
        async mounted() {
            let routerId = this.$route.query.id
            if(routerId) {
                let { dashBoard } = await findOneLayout(routerId)
                console.log(this.wigetData = dashBoard)
            }else {
                this.wigetData = this.dashBoard
            }
            // console.log(this.dashBoard)
        }
    }
</script>

<style lang="less" scoped>
    .view-content {
        padding:40px;
        .view-row {
            div {
                flex: 1;
            }
        }
    }
</style>