<template>
  <div class="container" id="container">
    <div class="container-top">
      <div class="container-item-right">
        <header>
          <shead
            :hospitalName="hospitalName"
            :wardName="wardName"
            :dates="dates"
          ></shead>
        </header>
        <section class="item-config">
          <div id="qst" ref="qst">echarts1</div>
          <div id="smtz" ref="smtz">echarts2</div>
        </section>
      </div>
    </div>
    <div class="container-bottom">
      <div><a-icon type="left" @click="toHZ" /> 患者评估趋势图</div>
      <div>{{ brch }}床 &nbsp;&nbsp;&nbsp;{{brxm.length==2?"*"+brxm.substr(1,1):brxm.length==3?"**"+brxm.substr(2,1):"**"+brxm.substr(2,2)}}&nbsp;&nbsp;&nbsp;</div>
    </div>
  </div>
</template>
<script>
import Shead from "../../views/Board/nursingBoardHead";
export default {
  name: "nursingBoard",
  data() {
    return {
      hospitalName: "绵阳市三台县人民医院", //医院名称
      bqdm: "", //医院所属病区
      item:"",//同病区不同楼层分组
      wardName: "XXX病区", //病区名称
      dates: "8888-88-88 88:88 星期一", //当前时间
      zyh: "",
      brch: "",
      brxm: "",
    };
  },
  components: {
    Shead,
  },
  computed: {},
  methods: {
    toHZ() {
      // sessionStorage.setItem("pbybj", 'ybj');//进入查看昨日后返回到已标记
      // this.$router.go(-1);
      this.$router.push({
        path: "/patientBoard",
        query: {
          bqdm: this.bqdm,
          item: this.item,
        },
      });
    },
    
    async getDataAll() {
      //获取全部数据&html架构JSON
      const res=await this.$axios.get('/WhiteBoard/WBApi.ashx/GetPatientTrendData',{zyh:this.zyh})
      console.log(res)
    },
    //患者评估趋势图
    qst() {
      const chart = this.$refs.smtz;
      var myChart = this.$echarts.init(qst);
      var option = {
        title: {
          top:'20',
          left:'20',
          text: "患者评估趋势图",
          textAlign: "left",
          textStyle: {
            //这里就是设置ttile文本的样式。
            color: "#000",
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          type: "plain",
          data: ["压疮", "跌倒", "疼痛", "导管", "ADL"],
          top:'20',
          right: "50",
          itemHeight: 13, //没个iten图标的大小。
          symbolKeepAspect: true,
          icon: "rect",
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        grid: { //canvas中的图表绘制。就是网格区域 。
            show: true,
            top: '8%', //可以是数值，也可以是百分比。
            left: '3%',
            right: '2%',
            bottom: '2%',
            borderWidth: '0.5',
            borderColor: "#fff",
            containLabel: true, //是否包含刻度标尺，不包含的话Y轴在全屏状态下就会显示在屏幕之外。
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: ["4-12", "4-12", "4-12", "4-12", "4-12", "4-12", "4-12"],
          axisTick: { //控制x轴刻度。
                    show: true, //不显示刻度。
                    inside: true, //代表刻度的小尖尖朝内还是朝外。
                },
            axisLabel: { //坐标轴刻度标签的相关设置。
                show: true,
                color: '#000', //刻度名称的字体颜色。
                fontSize: 13,
            },
        },
        yAxis: [
          {
            show: true,
            type: "value",
            position: "left", //原来y轴可以放在left，right两个位置。
            min: 0, //刻度尺最小单位。
            max: 200, //刻度尺最大单位。
            interval: 20, //强制分割单位。
            axisLine: {
              show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            splitLine:{show: false}
          },
          {
            show: true,
            type: "value",
            position: "right", //原来y轴可以放在left，right两个位置。
            min: 35, //刻度尺最小单位。
            max: 43, //刻度尺最大单位。
            interval: 1, //强制分割单位。
            axisLine: {
              show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            axisLabel: {
              formatter: function (value) {
                var texts = [];
                texts.push(value+"℃");
                return texts;
              },
            },
            splitLine:{show: false}
          },
        ],
        series: [
          {
            name: "压疮",
            type: "line",
            yAxisIndex: 1,
            data: [36.8, 36, 37.6, 38.7, 36.5, 35.9, 35.5],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "跌倒",
            type: "line",
            yAxisIndex: 0,
            data: [70, 65, 75, 65, 55, 90, 80],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "疼痛",
            type: "line",
            yAxisIndex: 0,  
            data: [50, 32, 20, 54, 90, 33, 41],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "导管",
            type: "line",
            yAxisIndex: 1,
            data: [115, , 102, 95, , 90, 124],
            lineStyle:{
                normal:{
                    width:1.5
                }
            },
            connectNulls:true,
          },
          {
            name: "ADL",
            type: "line",
            yAxisIndex: 1,
            data: [80, 98, 77, 89, 84, 91, 79],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
        ],
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      window.onresize = function () {
        myChart.resize();
      };
    },
    smtz() {
      const chart = this.$refs.smtz;
      var myChart = this.$echarts.init(smtz);
      var option = {
        title: {
          top:'20',
          left:'20',
          text: "患者生命体征趋势图",
          textAlign: "left",
          textStyle: {
            //这里就是设置ttile文本的样式。
            color: "#000",
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          type: "plain",
          data: ["体温", "呼吸", "脉搏", "收缩压", "舒张压"],
          top:'20',
          right: "50",
          itemHeight: 13, //没个iten图标的大小。
          symbolKeepAspect: true,
          icon: "rect",
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        grid: { //canvas中的图表绘制。就是网格区域 。
            show: true,
            top: '8%', //可以是数值，也可以是百分比。
            left: '3%',
            right: '2%',
            bottom: '2%',
            borderWidth: '0.5',
            borderColor: "#fff",
            containLabel: true, //是否包含刻度标尺，不包含的话Y轴在全屏状态下就会显示在屏幕之外。
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: ["4-12", "4-12", "4-12", "4-12", "4-12", "4-12", "4-12"],
          axisTick: { //控制x轴刻度。
                    show: true, //不显示刻度。
                    inside: true, //代表刻度的小尖尖朝内还是朝外。
                },
            axisLabel: { //坐标轴刻度标签的相关设置。
                show: true,
                color: '#000', //刻度名称的字体颜色。
                fontSize: 13,
            },
        },
        yAxis: [
          {
            show: true,
            offset: 40,
            type: "value",
            position: "left", //原来y轴可以放在left，right两个位置。
            min: 0, //刻度尺最小单位。
            max: 100, //刻度尺最大单位。
            interval: 10, //强制分割单位。
            axisLine: {
              show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            splitLine:{show: false}
          },
          {
            show: true,
            type: "value",
            position: "left", //原来y轴可以放在left，right两个位置。
            min: 0, //刻度尺最小单位。
            max: 200, //刻度尺最大单位。
            interval: 20, //强制分割单位。
            axisLine: {
              show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            splitLine:{show: false}
          },
          {
            show: true,
            type: "value",
            position: "right", //原来y轴可以放在left，right两个位置。
            min: 35, //刻度尺最小单位。
            max: 43, //刻度尺最大单位。
            interval: 1, //强制分割单位。
            axisLine: {
              show: true,
              color: "#000",
              lineStyle: {
                color: "#000",
              },
            },
            axisLabel: {
              formatter: function (value) {
                var texts = [];
                texts.push(value+"℃");
                return texts;
              },
            },
            splitLine:{show: false}
          },
        ],
        series: [
          {
            name: "体温",
            type: "line",
            yAxisIndex: 2,
            data: [36.8, 36, 37.6, 38.7, 36.5, 35.9, 35.5],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "呼吸",
            type: "line",
            yAxisIndex: 0,
            data: [70, 65, 75, 65, 55, 90, 80],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "脉搏",
            type: "line",
            yAxisIndex: 0,  
            data: [50, 32, 20, 54, 90, 33, 41],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
          {
            name: "收缩压",
            type: "line",
            yAxisIndex: 1,
            data: [115, , 102, 95, , 90, 124],
            lineStyle:{
                normal:{
                    width:1.5
                }
            },
            connectNulls:true,
          },
          {
            name: "舒张压",
            type: "line",
            yAxisIndex: 1,
            data: [80, 98, 77, 89, 84, 91, 79],
            lineStyle:{
                normal:{
                    width:1.5
                }
            }
          },
        ],
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      window.onresize = function () {
        myChart.resize();
      };
    },
  },
  mounted() {
    setInterval(() => {
      //页面创建完成加载当前时间。1s一次
      this.dates = getDate();
    }, 1000);
    fullScreen();
    this.qst();
    this.smtz();
    var query = this.$route.query;
    this.zyh = query.zyh;
    this.brch = query.brch;
    this.brxm = query.brxm;
    this.bqdm=query.bqdm;
    this.item= query.item;
    this.wardName = query.wardName;
    this.getDataAll();
    setInterval(() => {
      //没5分钟刷新一系整体数据
      this.getDataAll();
    }, 60 * 5000);
  },
};
</script>

<style  scoped>
@import url("../../../../static/css/Board.css");
.container-item-right header {
  height: 90px;
}
.container-top .container-item-right,
.container-top .container-item-right header,
.container-top .container-item-right section,
.container-item-right header .title,
.container-item-right header nav {
  width: 1920px;
}
.container-item-right section {
  height: 930px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 30px 30px;
}
.container-item-right section > div {
  height: 890px;
  width: 910px;
  background: #fff;
  border-radius: 40px;
  box-shadow: rgba(215, 215, 215, 0.996) 5px 5px 5px;
}
.container-item-right header .title {
  padding: 0 20px;
}
.container-top {
  height: 1020px;
  background: #f2f2f2;
  border-radius: 0;
}
.container-bottom {
  justify-content: space-between;
  background: #196d9d;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 0 45px;
}
.container-bottom i {
  margin: 0;
  color: #fff;
}
.container-bottom > div:first-child {
  display: flex;
  align-items: center;
}
.container {
  border-radius: 40px;
  overflow: hidden;
}
</style>
