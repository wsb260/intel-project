<template>
    <div>

        <Row>
            <Card>
                <div slot="title" class="card-title">基本信息</div>
                <Form ref="basicInfo" label-position="left" :model="basicInfo" :label-width="120" inline>
                    <FormItem label="组件名称：" prop="widgetTitle">
                        <Input v-model="config.title" placeholder="请输入组件名称" style="width:180px"></Input>
                    </FormItem>
                    <FormItem label="组件类型：" prop="widgetType">
                        <Select v-model="config.type" style="width:180px;">
                            <Option v-for="item in typeList"
                                :value="item.value"
                                :key="item.value">
                                {{ item.label }}
                            </Option>
                        </Select>
                    </FormItem>
                </Form>
            </Card>
        </Row>
        <Row class="create-body">
            <Card class="widget-setting">
                <!-- 标题 -->
                <div slot="title" class="card-title">
                    组件配置
                </div>
                <!-- 配置项 -->
                <div class="settting-list">
                    <Collapse v-model="colValue">
                        <Panel name="1">
                            数据源配置：
                            <ul slot="content" class="content">
                                <li>
                                    <span>请求地址</span>
                                    <div><Input v-model="config.path"></Input></div>
                                </li>
                                <li>
                                    <span>请求方法</span>
                                    <Select v-model="config.method" style="width:200px">
                                        <Option v-for="item in requestType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </li>
                                <li>
                                    <span>请求参数</span>
                                    <div><Input v-model="config.params"></Input></div>
                                </li>
                            </ul>
                        </Panel>
                        <Panel name="2">
                            样式配置
                            <ul slot="content" class="content">
                                <li>
                                    <span>类型</span>
                                    <Select v-model="config.style" style="width:200px">
                                        <Option v-for="item in styleType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                </div>
                <!-- 操作按钮 -->
                <div class="action-list">
                    <Button @click="cancel">取消</Button>
                    <Button type="primary" @click="saveWidget()">提交</Button>
                    <Button type="success" @click="showPreview">预览</Button>
                </div>
            </Card>
            <Card class="widget-view">
                <!-- <ChartLine></ChartLine> -->
                <template v-if="preview">
                    <ChartTrend :chartType="chartType"></ChartTrend>
                </template>
                <template v-else>
                    <div class="no-preview"></div>
                </template>
            </Card>
        </Row>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { saveLayout, findOneLayout } from '../api/service/eidt';

  export default {
        name: '',
        data() {
            return {
                basicInfo: {
                    widgetTitle: '',
                    widgetType: ''
                },
                typeList: [
                    {
                        label: '趋势图',
                        value: 'mdtrend'
                    },
                    {
                        label: '仪表图',
                        value: 'mdcircle'
                    },
                    {
                        label: '面板',
                        value: 'billboard'
                    },
                    {
                        label: '表格',
                        value: 'mdtable'
                    },
                    {
                        label: '事件流图',
                        value: 'eventRiver'
                    }
                ],
                baseInfoValidate: {
                    widgetTitle: [{ required: true, message: '请填写', trigger: 'blur' }],
                    widgetType: [{ required: true, message: '请选择', trigger: 'change' }]
                },
                colValue:'1',
                requestTypeValue:'',
                requestType:[{value:'GET',label:'GET'},{value:'POST',label:'POST'}],
                styleType:[{value:'line',label:'折线图'},{value:'bar',label:'柱状图'}], // 样式
                config: { // 配置对象
                    path:'', // 请求接口地址
                    method: '', // 请求方法类型
                    params: '', // 参数
                    style:'', // 组件样式类型
                    title:'', // 组件名称
                    type: '', // 组件类型
                },
                preview: false,
                chartType:'',
                routerId:'',
                routerIndex: '',
                routerPid:'',
                dashBoardData:[]
            }
        },
        computed:{
            ...mapState('edit',{
                dashBoard:state => state.dashBoard
            })
        },
        methods: {
            // ...mapMutations(),
            ...mapActions(['updateAppName']),
            ...mapActions('edit',['setInfo']),
            // 取消
            cancel() {
                this.$router.go(-1)
            },
            // 预览
            showPreview() {
                this.chartType = this.config.style
                this.preview = true 
            },
            // 提交
            async saveWidget() {
                // debugger
                let { dashBoard } = await findOneLayout(this.routerPid)
                this.dashBoardData = dashBoard
                this.dashBoardData[this.routerIndex].forEach(item => {
                    if(item.id === this.routerId) {
                        this.$set(item,'config',this.config)
                    }
                })
                this.saveData()
                // this.dashBoard[this.routerIndex].forEach(item => {
                //     if(item.id === this.routerId) {
                //         // 当前配置信息挂载到当前布局模块
                //         this.$set(item,'config',this.config)
                //     }
                // })
                // this.setInfo(this.config)
                this.$router.back()
            },
            // 保存数据
            saveData() {
                console.log(this.dashBoardData)
                saveLayout(this.routerPid,this.dashBoardData)
            }
        },
        mounted() {
            // index是第几行，id是第几列
            let { id, index, pid } = this.$route.query
            this.routerId = id
            this.routerIndex = index
            this.routerPid = pid
        }
    }
</script>

<style lang="less" scoped>
.create-body {
    display: flex;
    .widget-setting {
        width:460px;
        margin-right:20px;
        .settting-list {
            .content {
                display: flex;
                flex-direction: column;
                li {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    margin:5px 0;
                    span {
                        width:80px;
                    }
                }
            }
        }
        .action-list {
            display: flex;
            justify-content: flex-end;
            button {
                margin: 10px;
            }
        }
    }
    .widget-view {
        flex:1;
    }
}

</style>