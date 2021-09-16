<template>
  <div class="content">
    <div id="hijb" ref="hijb"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Specialhl: "",
      Onehl: "",
      Twohl: "",
      Threehl: ""
    };
  },
  props: {
    hljb: {}
  },
  watch: {
    hljb() {
      this.getDataAll();
    }
  },
  mounted() {
    this.getDataAll();
    // this.hijb();
  },
  methods: {
    getDataAll() {
      // console.log(this.hljb,1);
      if (this.hljb.count) {
        (this.Specialhl = this.hljb.levelSpecial),
          (this.Onehl = this.hljb.levelOne),
          (this.Twohl = this.hljb.levelTwo),
          (this.Threehl = this.hljb.levelThree),
          this.hijb1();
        // console.log( this.Specialhl,this.Onehl,this.Twohl,this.Threehl);
      }
    },
    hijb1() {
      const chart = this.$refs.hijb;
      var myChart = this.$echarts.init(hijb);
      var than = this;
      var option = {
        tooltip: {
          trigger: "item"
        },
        color: ["#FF7676", "#FFDEF0", "#8BC9ED", "#5FB878"],
        series: [
          {
            name: "护理级别",
            type: "pie",
            radius: "70%",
            data: [
              { value: than.Specialhl, name: "特级护理" },
              { value: than.Onehl, name: "一级护理" },
              { value: than.Twohl, name: "二级护理" },
              { value: than.Threehl, name: "三级护理" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      window.onresize = function() {
        myChart.resize();
      };
    }
  }
};
</script>
<style scoped>
.content {
  height: 300px;
  padding: 10px;
  /* border:1px solid red; */
}
#hijb {
  width: 420px;
  height: 290px;
}
</style>
