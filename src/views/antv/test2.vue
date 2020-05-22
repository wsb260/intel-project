<template>
    <div class="test2-root">
        <div id="content"></div>

        <select name="select" id="select" ref="select">
            <option value="default">default</option>
            <option value="addNode">add-node</option>
            <option value="addEdge">add-edge</option>
        </select>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>
        <el-button id="btn" type="primary">重绘</el-button>
        <el-card class="box-card" :body-style="{ padding: '20px' }">
            <!-- card body -->
            <div class="box-content">
                <el-collapse v-model="activeNames" :accordion="false" @change="">
                    <el-collapse-item title="节点配置" name="1">
                        <el-form label-width='80px' :model='itemConfig'>
                            <el-form-item label="节点编号">
                                <el-input v-model="itemConfig.id"></el-input>
                            </el-form-item>
                            <el-form-item label="横坐标">
                                <el-input v-model="reactGround.x"></el-input>
                            </el-form-item>
                            <el-form-item label="纵坐标"">
                            <el-input v-model=" reactGround.y">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="文本文字">
                                <el-input v-model="itemConfig.label"></el-input>
                            </el-form-item>
                            <el-form-item label="尺寸">
                                <el-input v-model="itemConfig.size"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="节点数据" name="">
                        <pre>{{config}}</pre>
                    </el-collapse-item>
                </el-collapse>
            </div>

            <div class="box-foot">
                <el-button @click="hideBtn" type="primary">隐藏</el-button>
                <el-button @click="showBtn" type="primary">显示</el-button>
                <el-button>取消</el-button>
                <el-button type="primary" @click="savaBtn">保存</el-button>
            </div>
        </el-card>

    </div>
</template>

<script>
    import G6 from '@antv/g6'
    export default {
        name: '',
        data() {
            return {
                drawer: false,
                activeNames: ['1'],
                data: {
                    nodes: [
                        { id: 'node0', size: 50, label: 'node0' },
                        { id: 'node1', size: 30, label: 'node1' },
                        { id: 'node2', size: 30, label: 'node2' },
                        { id: 'node3', size: 30, label: 'node3' },
                        { id: 'node4', size: 30, isLeaf: true },
                        { id: 'node5', size: 30, isLeaf: true },
                        { id: 'node6', size: 15, isLeaf: true },
                        { id: 'node7', size: 15, isLeaf: true },
                        { id: 'node8', size: 15, isLeaf: true },
                        { id: 'node9', size: 15, isLeaf: true },
                        { id: 'node10', size: 15, isLeaf: true },
                        { id: 'node11', size: 15, isLeaf: true },
                        { id: 'node12', size: 15, isLeaf: true },
                        { id: 'node13', size: 15, isLeaf: true },
                        { id: 'node14', size: 15, isLeaf: true },
                        { id: 'node15', size: 15, isLeaf: true },
                        { id: 'node16', size: 15, isLeaf: true },
                    ],
                    edges: [
                        { source: 'node0', target: 'node1' },
                        { source: 'node0', target: 'node2' },
                        { source: 'node0', target: 'node3' },
                        { source: 'node0', target: 'node4' },
                        { source: 'node0', target: 'node5' },
                        { source: 'node1', target: 'node6' },
                        { source: 'node1', target: 'node7' },
                        { source: 'node2', target: 'node8' },
                        { source: 'node2', target: 'node9' },
                        { source: 'node2', target: 'node10' },
                        { source: 'node2', target: 'node11' },
                        { source: 'node2', target: 'node12' },
                        { source: 'node2', target: 'node13' },
                        { source: 'node3', target: 'node14' },
                        { source: 'node3', target: 'node15' },
                        { source: 'node3', target: 'node16' },
                    ],
                },
                newNodes: [], // 新增节点的数据
                newEdges: [], // 新增的边的数据
                config: {},
                addContent: 0,
                itemConfig: {}, // 数据配置
                reactGround: {}, // 坐标配置
                labelCfg: {}, // 文字样式配置
                node: {}, // 节点样式配置
                updateNode: null // 当前被点击的节点
            }
        },
        methods: {
            forceRefsh(graph) {
                const self = this
                const forceLayout = graph.get('layoutController').layoutMethod;
                graph.on('node:dragstart', function (e) {
                    graph.layout(self.data || null)
                    refreshDragedNodePosition(e);
                });
                graph.on('node:drag', function (e) {
                    forceLayout.execute();
                    refreshDragedNodePosition(e);
                });
                graph.on('node:dragend', function (e) {
                    e.item.get('model').fx = null;
                    e.item.get('model').fy = null;
                });
                function refreshDragedNodePosition(e) {
                    const model = e.item.get('model');
                    model.fx = e.x;
                    model.fy = e.y;
                }
            },
            BehaviRegist() {
                const self = this
                G6.registerBehavior('click-add-node', {
                    getEvents() {
                        return {
                            'canvas:click': 'onClick'
                        }
                    },
                    onClick(ev) {
                        const graph = this.graph

                        let model = {
                            x: ev.canvasX,
                            y: ev.canvasY,
                            id: `node-${self.addContent + 100}`
                        }
                        graph.addItem('node', model)
                        self.newNodes.push(model)
                        // 合并新节点
                        self.data.nodes = self.data.nodes.concat(self.newNodes)
                        self.addContent++
                        // const forceLayout = graph.get('layoutController').layoutMethod;
                        // graph.layout(self.newNodes)
                        // forceLayout.execute();
                        // graph.paint(); // 必须调用以重绘

                    }
                })
                G6.registerBehavior('click-add-edge', {
                    getEvents() {
                        return {
                            'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
                            mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
                            'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
                        }
                    },
                    onClick(ev) {
                        const node = ev.item
                        const graph = this.graph
                        let point = { x: ev.x, y: ev.y }
                        let model = node.getModel()
                        if (this.addingEdge && this.edge) {
                            graph.updateItem(this.edge, {
                                target: model.id
                            })
                            const edgeModel = this.edge.getModel() // 获得边的实例
                            self.newEdges.push(edgeModel) // 存储新增的边
                            self.data.edges = self.data.edges.concat(self.newEdges) // 合并新的边
                            this.edge = null
                            this.addNode = false
                        } else {
                            this.edge = graph.addItem('edge', {
                                source: model.id,
                                target: point,
                                style: {
                                    stroke: 'red',
                                    endArrow: true
                                }
                            })
                            // this.edge.toFront() // 把线前置
                            // graph.paint(); // 必须调用以重绘
                            this.addingEdge = true
                        }
                    },
                    onMousemove(ev) {
                        const point = { x: ev.x, y: ev.y }
                        if (this.addingEdge && this.edge) {
                            this.graph.updateItem(this.edge, {
                                target: point,
                                label: 'edge'
                            })
                        }
                    },
                    onEdgeClick(ev) {
                        const currentEdge = ev.item
                        if (this.addingEdge && this.edge === currentEdge) {
                            this.graph.removeItem(this.edge);
                            this.edge = null;
                            this.addingEdge = false;
                            // 移除存储的边数据
                            // self.newEdges.filter = self.newEdges.filter(item => {
                            //     return item != this.edge.getModel()
                            // })
                        }
                    }
                })
            },
            // 画布重绘
            Repaint(graph) {
                graph.clear()
                graph.data(this.data)
                graph.render()
            },
            // 节点点击
            nodeClick(graph) {
                graph.on('node:click', e => {
                    // 先将所有当前是click状态的节点置为非click状态
                    const clickNodes = graph.findAllByState('node', 'click')
                    clickNodes.forEach(cn => {
                        graph.setItemState(cn, 'click', false)
                    })
                    const nodeItem = e.item // 获取被点击的节点元素对象
                    graph.setItemState(nodeItem, 'click', true) // 设置当前节点的click状态为true

                    this.configVisible = !!e
                    if (e && nodeItem) {
                        const model = nodeItem.get('model')
                        this.config = model
                        // this.label = model.label
                        this.labelCfg = {
                            label: model.label,
                            // fill: model.labelCfg.fill,
                            // fontSize: model.labelCfg.fontSize
                        }
                        this.reactGround = {
                            x: model.x,
                            y: model.y,
                        }
                        this.itemConfig = {
                            id: model.id,
                            label: model.label,
                            size: model.size
                        }
                    }
                    // 缓存当前点击的节点
                    this.updateItem = this.nodeUpdate(graph, nodeItem)
                })
            },
            nodeUpdate(graph, item) {
                const self = this
                class NodeUpdate {
                    constructor() { }
                    // 更新节点
                    updateCfg() {
                        // 更新元素
                        item.update(self.itemConfig)
                        // 更新坐标
                        const cfg = {
                            x: parseInt(self.reactGround.x),
                            y: parseInt(self.reactGround.y)
                        }
                        item.updatePosition(cfg)
                        // 更新坐标后需要重新执行布局算法
                        graph.layout();
                    }
                    // 显示隐藏
                    nodeHide() {
                        item.hide()
                        const edges = item.getEdges()
                        edges.forEach(edge => {
                            edge.hide()
                        })
                        graph.paint();
                    }
                    nodeShow() {
                        const nodes = graph.getNodes()
                        nodes.forEach(node => {
                            node.show()
                        })
                        const edges = graph.getEdges()
                        edges.forEach(edge => {
                            edge.show()
                        })
                        graph.paint();
                    }
                }
                return new NodeUpdate(graph, item)
                // return () => {
                //     // 更新元素
                //     item.update(self.itemConfig)
                //     // 更新坐标
                //     const cfg = {
                //         x: parseInt(self.reactGround.x),
                //         y: parseInt(self.reactGround.y)
                //     }
                //     item.updatePosition(cfg)
                //     // 更新坐标后需要重新执行布局算法
                //     graph.layout();
                // }
            },
            // 保存
            savaBtn() {
                // 更新节点
                this.updateItem.updateCfg()
            },
            // 隐藏
            hideBtn() {
                this.updateItem.nodeHide()
            },
            // 显示
            showBtn() {
                this.updateItem.nodeShow()
            },
            // 下拉框模式更换
            modelChange(graph) {
                const selector = this.$refs.select
                selector.addEventListener('change', (e) => {
                    const value = e.target.value
                    graph.setMode(value)
                    if (value === 'default') {
                        this.Repaint(graph)
                    }
                })
            }
        },
        mounted() {
            const self = this
            // 注册模式
            this.BehaviRegist()
            // 初始化
            const graph = new G6.Graph({
                container: 'content',
                width: 800,
                height: 500,
                layout: {
                    type: 'force',
                    preventOverlap: true,
                    nodeSpacing: 15
                },
                // groupByTypes: false, // 关闭按照元素类型进行分组
                modes: {
                    default: [
                        'drag-node',
                        'drag-canvas',
                        'zoom-canvas',
                        'click-select',
                        'activate-relations'
                    ],
                    addNode: ['click-add-node', 'click-select'],
                    addEdge: ['click-add-edge', 'click-select']
                },
                defaultNode: {
                    fill: '#C6E5FF',
                    stroke: '#5B8FF9',
                    size: 10
                },
                defaultEdge: {
                    style: {
                        endArrow: true,
                        lineAppendWidth: 3
                    },
                    labelCfg: {
                        autoRotate: true,
                        style: {
                            stroke: 'white',
                            lineWidth: 5
                        }
                    }
                },
                nodeStateStyles: {
                    selected: {
                        stroke: 'gray',
                        lineWidth: 2,
                        fill: 'steelblue'
                    },
                    active: {
                        opacity: 1
                    },
                    inactive: {
                        opacity: 0.2
                    },
                    click: {

                    }
                }
            })

            graph.data(this.data)
            graph.render()
            /*弹力跟随*/
            this.forceRefsh(graph)
            // 模式切换
            this.modelChange(graph)
            // 点击节点触发配置面板
            this.nodeClick(graph)
        },
    }
</script>

<style lang="less" scoped>
    .test2-root {
        position: relative;
    }

    #configPanel {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 25%;
        overflow: hidden;
        padding: 40px 0 10px;
        transition: transform .3s ease-in-out;
        box-shadow: 0 0 2px rgba(0, 0, 0, .1);
    }

    #configPanel.hidden {
        transform: translate(100%, 0);
    }

    .box-card {
        width: 25%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        box-shadow: -2px 0 2px 2px lightblue;
        overflow: auto;
    }

    .box-content {
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
    }

    .box-foot {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 20px 0;
        text-align: center;
    }
</style>