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
  methods: {
    getNodes() {
      return (async () => {
        const response = await fetch(
          "https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json"
        );
        const remoteData = await response.json();
        const nodes = remoteData.nodes;
        return remoteData;
      })();
    }
  },
  mounted() {
    const width = document.getElementById("mountNode").scrollWidth;
    const height = document.getElementById("mountNode").scrollHeight || 500;
    const graph = new G6.Graph({
      container: "mountNode",
      width,
      height,
      layout: {
        type: "force"
      },
      defaultNode: {
        size: 12,
        color: "blue",
        style: {
          lineWidth: 2,
          fill: "green"
        }
      },
      defaultEdge: {
        size: 2,
        color: "#e2e2e2"
      }
    });

    this.getNodes().then(data => {
      graph.data(data);
      graph.render();

      const forceLayout = graph.get("layoutController").layoutMethod;
      graph.on("node:dragstart", function(e) {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on("node:drag", function(e) {
        forceLayout.execute();
        refreshDragedNodePosition(e);
      });
      graph.on("node:dragend", function(e) {
        e.item.get("model").fx = null;
        e.item.get("model").fy = null;
      });

      function refreshDragedNodePosition(e) {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
      }
    });
  }
};
</script>

<style scoped>
/* 提示框的样式 */
/deep/ .g6-tooltip {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 12px;
  color: #545454;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 8px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
}
</style>
