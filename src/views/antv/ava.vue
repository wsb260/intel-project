<template>
<div class="ava-root">
  <div id="mountNode"></div>
  <div id="chart1"></div>
  </div>
</template>

<script>
import { autoChart } from "@antv/chart-advisor";

export default {
  name: "ava",
  data() {
    return {};
  },
  mounted() {
    const container = document.getElementById("mountNode");

    const data = [
      { field1: "a", field2: "100" },
      { field1: "b", field2: "300" },
      { field1: "c", field2: "800" }
    ];

    autoChart(
      container,
      data,
      {
        toolbar: true, development: true,
        // config:{
        //     configs: {
        //         title: { visible: true, text: "sssssss" },
        //         yField: "field2",
        //         xField: "field1"
        //     },
        //     type: "Column"
        // }
      }
    );

    const chart1 = document.getElementById("chart1");

    const data1 = [
      { field1: "a", field2: "100" },
      { field1: "b", field2: "300" },
      { field1: "c", field2: "800" }
    ];

    autoChart(
      chart1,
      [],
      {
        toolbar: true, development: true
      }
    );
  }
};
</script>

<style scoped>
.ava-root {
    width:100%;
    height:100%;
    display: flex;
    flex-flow: column;
}
#mountNode {
    flex:1;
}

#chart1 {
    flex:1;
}
</style>
