
<template>
    <div>
        <Row>
            <Card>
                <div slot="title" class="card-title">基本信息</div>
            </Card>
        </Row>
        <Row>
            <Card class="dashboard-view">
                <!-- 头部 -->
                <div slot="title" class="card-title">
                    <span class="title">仪表盘布局</span>
                    <div class="btn-list">
                        <a href="#/list" class="btn-back">返回</a>
                        <a :href="viewHref" target="_blank" class="btn-preview">预览</a>
                        <a href="#/list" @click="saveData">保存</a>
                    </div>
                </div>
                <!-- 主体内容 -->
                <div class="dashboard-line"
                v-for="(item, ind) in dashBoardData"
                :key="ind">
                    <div class="widget-add-btn"
                        @click="addWidget(item, ind)">
                        +
                    </div>
                     <draggable
                        v-model="dashBoardData[ind]"
                        class="drag"
                        @change="log"
                        style="background: grey;">
                        <div
                            class="drag-content"
                            v-for="(element, widgetIndex) in item"
                            :key="widgetIndex"
                            >
                            <div class="dashboard-widget">
                                <ul class="widget-icon">
                                    <Icon class="icon" @click="widgetAction(element,ind)" type="md-create" size="20" color="#55abf9" />
                                    <Icon class="icon" @click="widgetDelete(item,widgetIndex
                                    )" type="md-trash" size="20" color="#55abf9" />
                                </ul> 
                                <div class="widget-content">
                                    <template v-if="element.config">
                                        <p>名称：{{ element.config.title }}</p>
                                        <p>类型：{{ element.config.type }}</p>
                                    </template>
                                    <template v-else>
                                        <div class="tips no-data">未绑定数据，点击编辑修改</div>
                                    </template>
                                </div>
                            </div>  
                        </div>
                    </draggable>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState,mapActions } from 'vuex'
import { saveLayout, findOneLayout } from '../api/service/eidt';

    export default {
        name: '',
        components:{
            draggable
        },
        data() {
            return {
                viewHref:'#/view?id='+this.id,
                enabled: true,
                dashBoard:[],
                id:0,
                name:100000,
                rows:[
                    {
                        "index": 2,
                        "name":1,
                        "items": [
                        {
                            "title": "item 2"
                        },
                        {
                            "title": "item 3"
                        }
                        ]
                    },
                    {
                        "index": 1,
                        "name":2,
                        "items": [
                        {
                            "title": "item 1"
                        }
                        ]
                    }
                ],
                routerId:'' // 跳转过来的页面id
            }
        },
        computed: {
            ...mapState({
                newDashBoard: state => state.edit.dashBoard
            }),
            dashBoardData() {
                this.dashBoard.forEach((item,index) => {
                    if(item.length === 0 && (this.dashBoard.length -1) !== index) {
                        this.dashBoard.splice(index,1)  
                    }
                })
                if(this.dashBoard.length === 0 || this.dashBoard[this.dashBoard.length - 1].length !== 0){
                    this.dashBoard.push([])
                }
                return this.dashBoard
            }
        },
        created() {
            // 获取路由参数
            this.routerId = this.$route.query.id
            this.viewHref = '#/view?id='+this.routerId
        },
        methods: {
            // edit模块的布局缓存
            ...mapActions('edit',['setLayout','removeLayout']),
            // 增加布局模板
            addWidget(item,index) {
                if(item.length > 5) {
                    alert("一行最多添加6个组件")
                    return
                }
                item.push({
                    id:this.id++,
                    name:this.name++
                })
                this.setLayout(this.dashBoard)
                // 保存到后台
                this.saveData()
                // this.$store.dispatch('setLayout',this.dashBoard)
            },
            // 编辑
            widgetAction(element,index) {
                let { name,id } = element
                this.$router.push({
                    path:'/create',
                    query:{
                        id,
                        index,
                        pid:this.routerId
                        }
                    })
                // window.location.href = '#/create'
            },
            // 删除
            widgetDelete(widget, index) {
                widget.splice(index,1)
                this.setLayout(this.dashBoardData)
            },
            // 预览
            log() {
                this.setLayout(this.dashBoardData)
                // 拖动之后保存
                this.saveData()
            },
            // 保存数据
            saveData() {
                saveLayout(this.routerId,this.dashBoardData)
            }
        },
        async mounted() {
            const routerId = this.$route.query.id
            if(routerId) {
                let { dashBoard } = await findOneLayout(routerId)
                this.dashBoard = dashBoard
                return
            }
            // 获取布局缓存
            this.dashBoard = this.newDashBoard.length === 0 ? [] : this.newDashBoard
        }
    }
</script>

<style lang="less" scoped>
    .card-title {
        display:flex;
        align-items: center;
        .title {
            flex:1;
        }
        .btn-list {
            width:260px;
            padding-right:10px;
            a{
                color: #fff;
                background-color: #2d8cf0;
                border-color: #2d8cf0;
                display: inline-block;
                cursor: pointer;
                border: 1px solid transparent;
                white-space: nowrap;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
                height: 32px;
                line-height: 32px;
                padding: 0 15px;
                margin:0 10px;
                font-size: 14px;
                border-radius: 4px;
                transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
                &:hover {
                    background-color: #57a3f3;
                    border-color: #57a3f3;
                }
            }
        }
    }
    .dashboard-line {
        display: flex;
        height:140px;
        .widget-add-btn {
            line-height: 120px;
            font-size:40px;
            border:#d1e1f1 dashed 1px;
            width:80px;
            text-align: center;
            color: #d1e1f1;
            cursor: pointer;
            border-radius: 3px;
            background: #f3f7fb;
        }
        .drag{
            flex:1;
            display:flex;
            .drag-content {
                flex:1;
                margin:10px;
                background: #fff;
                cursor: move;
                .dashboard-widget {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border: #dbe5ef solid 1px;
                    border-radius: 3px;
                    cursor: move;
                    display: flex;
                    align-items: center;
                    justify-content: center;;
                    .widget-icon {
                        position: absolute;
                        right:0;
                        top:0;
                        padding-right:15px;
                        padding-top:5px;
                        cursor: pointer;
                        .icon {
                            margin-left:10px;
                        }
                    }
                }
            }
        }
    }
</style>