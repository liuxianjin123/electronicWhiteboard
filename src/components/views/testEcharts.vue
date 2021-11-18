<template>
  <div class="gb" style="height:100%;width:100%">
    <a-button icon="el-icon-tickets" @click="CreateChart"> {{ msg }}</a-button>
    <div ref="chart" style="height:500px;width:100%"></div>
  </div>
</template>
<script>
export default {
  name: "Echarts",
  data() {
    return {
      msg: "Echarts"
    };
  },
  methods: {
    CreateChart() {
      const chart = this.$refs.chart;
      var myChart = this.$echarts.init(chart);
      let option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "5%",
          left: "center"
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" }
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        console.log("开始渲染");
        myChart.setOption(option, true);
      }
      window.onresize = function() {
        myChart.resize();
      };
    }
  },
  created() {}
};
</script>
<style scoped>
.gb {
  height: calc(100% - 55px);
}
#ersss {
  border: 1px solid red;
}
</style>
