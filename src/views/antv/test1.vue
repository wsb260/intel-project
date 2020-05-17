<template>
  <div>
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    const data = {
      nodes: [
        {
          id: "node1",
          label: "node1",
          x: 100,
          y: 200,
          // 该节点可选的连接点集合，该点有两个可选的连接点
          anchorPoints: [
            [0, 1],
            [0.5, 1]
          ],
          type: "rect"
        },
        {
          id: "node2",
          label: "node2",
          x: 300,
          y: 400,
          // 该节点可选的连接点集合，该点有两个可选的连接点
          anchorPoints: [
            [0.5, 0],
            [1, 0.5]
          ],
          type: "rect"
        }
      ],
      edges: [
        {
          source: "node1",
          target: "node2",
          // 该边连入 source 点的第 0 个 anchorPoint，
          sourceAnchor: 0,
          // 该边连入 target 点的第 0 个 anchorPoint，
          targetAnchor: 0,
          style: {
            endArrow: true
          }
        },
        {
          source: "node2",
          target: "node1",
          // 该边连入 source 点的第 1 个 anchorPoint，
          sourceAnchor: 1,
          // 该边连入 source 点的第 1 个 anchorPoint，
          targetAnchor: 1,
          style: {
            endArrow: true
          }
        }
      ]
    };

    const graph = new G6.Graph({
      container: "mountNode", // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 800, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
      nodeStateStyles: {
        hover: {
          fillOpacity: 0.8
        },
        selected: {
          lineWidth: 5
        }
      }
    });

    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图

    graph.on("node:mouseenter", evt => {
      const { item } = evt;
      graph.setItemState(item, "hover", true);
    });

    graph.on("node:mouseleave", evt => {
      const { item } = evt;
      graph.setItemState(item, "hover", false);
    });

    graph.on("node:click", evt => {
      const { item } = evt;
      graph.setItemState(item, "selected", true);
    });
  }
};
</script>

<style scoped></style>
