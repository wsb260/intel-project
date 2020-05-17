<template>
  <div class="container"></div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "",
  data() {
    return {
      width: 600,
      height: 500,
    };
  },
  methods: {
      getData() {
          return new Promise((resolve,reject)=>{
              let graphData = require("../assets/miserables.json");

              resolve(graphData)
          })
      },
    initGraph(data) {
      let _self = this
      // 转换成D3对象
      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));
      // 创建一个力学仿真
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3.forceLink(links).id(d => d.id)
        ) // 添加一个力模型（弹簧作用力）
        .force("charge", d3.forceManyBody()) // 创建一个电荷作用力模型.
        .force("center", d3.forceCenter(_self.width / 2, _self.height / 2)); // 创建一个中心作用力

      //   const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);
      // 在容器里创建svg并设置大小，缩放
      const svg = d3
        .select(".container")
        .append("svg")
        .attr("viewBox", [0, 0, _self.width, _self.height]);
        // 缩放
        svg.call(d3.zoom().on("zoom",function(){
            svg.attr("transform",d3.event.transform)
        })) // 拖动缩放
      // 创建一组线条
      const link = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));

      // 创建一组圆并具有拖动功能
      const node = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 20)
        .attr("fill", _self.color)
        .call(_self.drag(simulation));
      // 给圆形添加文字
      node.append("title").text(d => d.id);
      const nodeNameText = svg
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('dx',0)
      .attr('dy',0)
      .attr('fill','blue')
      .text(function(d){
        return d.id
      })
      // 进行一步仿真模拟
      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        node.attr("cx", d => d.x).attr("cy", d => d.y);
      });
    },
    color(d) {
      // 随机10个颜色
        var scale = d3.schemeCategory10;
        return scale[d.group]
    },
    drag(simulation) {
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }
  },
  mounted() {
      this.getData().then((data) => {
        this.initGraph(data)
      })
  }
};
</script>

<style lang="less" scoped>
    .container {
        width:1000px;
        height:1000px;
    }
</style>
