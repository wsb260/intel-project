<template>
  <div class="root">
    <div id="headPanel" class="header">
      Vue 生命周期图示
    </div>
    <div id="itemPanel">
      <item-panel></item-panel>
    </div>
    <div id="canvasPanel" ref="canvasPanel"></div>
    <div id="configPanel"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from "../component/data.js";
import ItemPanel from './component/item-panel'

export default {
  name: "flow-chart",
  data() {
    return {
      graph: null
    };
  },
  components:{
    ItemPanel
  },
  methods: {
    createGraphic() {
      this.graph = new G6.Graph({
        container: "canvasPanel",
        width: window.outerWidth - 50,
        height: window.outerHeight - 120,
        fitView: false,
        layout: {
          type: "dagre", // 流程图布局
          nodesep: 80, // 横向间距
          ranksep: 40 // 纵向间距
        },
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node"] // 允许拖拽画布、放缩画布、拖拽节点
        },
        defaultNode: {
          type: "rect-node",
          style: {
            radius: 10
          },
          labelCfg: {
            fontSize: 20
          }
        },
        nodeStateStyles: {
          "nodeState:default": {
            opacity: 1
          },
          "nodeState:hover": {
            opacity: 0.8
          },
          "nodeState:selected": {
            opacity: 0.9
          },
          hover:{
              fill:'lightsteelblue'
          },
          click: {
            stroke:'#000',
            lineWidth:3
          }
        }
      });

      this.graph.data(data);
      this.graph.render();
      // 监听鼠标进入节点
      this.graph.on('node:mouseenter',e=>{
        const nodeItem = e.item
        // 设置目标节点的hover状态
        this.graph.setItemState(nodeItem,'hover',true)
      })
      // 监听鼠标离开
      this.graph.on('node:mouseleave',e => {
        const nodeItem = e.item
        this.graph.setItemState(nodeItem,'hover',false)
      })
      // 监听鼠标点击节点
      this.graph.on('node:click',e => {
        // 先将所有当前有click状态的节点的click状态置为false
          const clickNodes = this.graph.findAllByState('node','click')
          clickNodes.forEach(cn => {
            this.graph.setItemState(cn,'click',false)
          })
          const nodeItem = e.item // 获取被点击的节点元素对象
          this.graph.setItemState(nodeItem,'click',true)
      })
      // 点击边
      this.graph.on('edge:click',e => {
        // 取消所有点击状态边的状态
        const clickEdges = this.graph.findAllByState('edge','click')
        clickEdges.forEach(ce => {
          this.graph.setItemState(ce,'click',false)
        })
        const edgeItem = e.item
        this.graph.setItemState(edgeItem,'click',true) // 设置当前边的click状态
      })

      this.$refs.canvasPanel.addEventListener('dragover',e => {
        e.preventDefault();
      })
      this.$refs.canvasPanel.addEventListener('drop',e => {
       console.log(e);
       
       e.preventDefault()
       let nodeType = e.dataTransfer.getData('shape')
       this.addNode(e,nodeType)
      })
    },
    addNode(e,type) {
      const model = {
        text: "node",
        type: type,
        x: e.offsetX,
        y: e.offsetY
      };
      this.graph.addItem("node", model);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.createGraphic();
    });
  },
  beforeDestory() {
    this.graph.destroy();
  }
};
</script>

<style lang="less" scoped>
.root {
  height: calc(100% - 81px);
  position: relative;
}
#headPanel {
  height: 40px;
  width: 100%;
  line-height: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
}
#itemPanel {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  width: 50px;
  box-shadow: 0 4px 2px 2px rgba(0, 0, 0, 0.1);
}
#canvasPanel {
  position: absolute;
  top: 40px;
  left: 50px;
  bottom: 0;
  right: 0;
  //   background: gray;
}
#configPanel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25%;
  overflow: auto;
  background: #fff;
  padding: 40px 0 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  display: none;
}
</style>
