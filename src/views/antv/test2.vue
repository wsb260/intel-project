<template>
    <div>
        <div id="content"></div>

        <select name="select" id="select" ref="select">
            <option value="default">default</option>
            <option value="addNode">add-node</option>
            <option value="addEdge">add-edge</option>
        </select>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
          </el-button>
        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
    import G6 from '@antv/g6'
    export default {
        name: '',
        data() {
            return {
                drawer: false,
                data: {
                    nodes: [{
                        id: 'node1',
                        x: 140,
                        y: 200,
                        label: 'node1',
                        labelCfg: {}
                    }, {
                        id: 'node2',
                        x: 340,
                        y: 200,
                        label: 'node2',
                        labelCfg: {}
                    }],
                    edges: [{
                        id: 'edge1',
                        source: 'node1',
                        target: 'node2'
                    }]
                },
                addContent: 0,
                config: {}, // 数据配置
                label: null, // 文字
                labelCfg: null, // 文字样式配置
                node: {} // 节点样式配置
            }
        },
        mounted() {
            const selector = this.$refs.select
            // 注册模式
            G6.registerBehavior('click-add-node', {
                getEvents() {
                    return {
                        'canvas:click': 'onClick'
                    }
                },
                onClick(ev) {
                    const graph = this.graph
                    graph.addItem('node', {
                        x: ev.canvasX,
                        y: ev.canvasY,
                        id: `node-${this.addContent}`
                    })
                    this.addContent++
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
                    console.log(ev.item)
                    const currentEdge = ev.item
                    if (this.addingEdge && this.edge === currentEdge) {
                        this.graph.removeItem(this.edge);
                        this.edge = null;
                        this.addingEdge = false;
                    }
                }
            })
            // 初始化
            const graph = new G6.Graph({
                container: 'content',
                width: 800,
                height: 500,
                // groupByTypes: false, // 关闭按照元素类型进行分组
                modes: {
                    default: [
                        'drag-node',
                        'drag-canvas',
                        'click-select',
                        'activate-relations'
                    ],
                    addNode: ['click-add-node', 'click-select'],
                    addEdge: ['click-add-edge', 'click-select']
                },
                nodeStateStyles: {
                    selected: {
                        stroke: 'red',
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

            selector.addEventListener('change', (e) => {
                const value = e.target.value
                graph.setMode(value)
            })

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
                    const model = nodeItem.getModel()

                    this.config = model
                    this.label = model.label
                    this.labelCfg = {
                        fill: model.labelCfg.fill,
                        fontSize: model.labelCfg.fontSize
                    }
                    this.node = {
                        fill: model.style.fill,
                        borderColor: model.style.stroke,
                        lineDash: model.style.lineDash || 'none',
                        width: model.style.width,
                        height: model.style.height,
                        shape: model.type
                    }
                }
            })
        },
    }
</script>

<style scoped>
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
</style>