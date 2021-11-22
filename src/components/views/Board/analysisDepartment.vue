<template>
  <div class="container" id="container">
    <div class="container-item-right">
      <section class="item-config">
        <div>
          <table>
            <thead>
              <tr>
                <th colspan="3">
                  <ul class="sdzb shadow">
                    <li v-for="item in topData" :key="item.name">
                      <img :src="item.imgUrl" alt="" />
                      <div>
                        <p>{{ item.title }}</p>
                        <p>{{ item.brNum }} 人</p>
                        <p>
                          <span
                            :style="{
                              color: item.bfb >= 0 ? 'green' : 'red',
                            }"
                            ><a-icon
                              :type="item.bfb >= 0 ? 'caret-up' : 'caret-down'"
                              style="font-size: 18px; vertical-align: middle"
                            />{{ item.bfb }}%</span
                          >
                          <span style="color: gray"> 同比昨日</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="width: 450px">
                  <div class="zwzb shadow">
                    <div class="zwzb-top">
                      <b> 床位占比</b>
                    </div>
                    <div style="height: 200px" class="zwzb-bottom">
                      <div id="zwzbEcharts"></div>
                      <div class="zwzb-child">
                        <ul class="zwzbul">
                          <li>
                            <b>总 床 位：{{ bed.bedCount }} 张</b>
                          </li>
                          <li>
                            <a-badge status="default" />空床数：{{
                              bed.emptyBedCount
                            }}张
                          </li>
                          <li>
                            <a-badge status="warning" />占床数：{{
                              bed.nonEmptyBedCount
                            }}张
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="sshz shadow">
                    <div class="zwzb-top">
                      <b> 手术患者</b>
                    </div>
                    <Sshz :sshz="sshz" ref="sshz"></Sshz>
                  </div>
                </th>
                <th style="width: 450px">
                  <div class="fxpg shadow">
                    <div class="zwzb-top">
                      <b> 风险评估</b>
                    </div>
                    <Fxpg :fxpg="fxpg1"></Fxpg>
                  </div>
                </th>
                <th style="width: 450px">
                  <div class="hzld shadow">
                    <div class="zwzb-top">
                      <b> 患者流动</b>
                    </div>
                    <Hzld :hzld="hzld"></Hzld>
                  </div>
                  <div class="hljb shadow">
                    <div class="zwzb-top">
                      <b> 护理级别</b>
                    </div>
                    <Hljb :hljb="hljb" ref="hljb"></Hljb>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Sshz from "../../views/Board/analysisDepartment_sshz";
import Fxpg from "../../views/Board/analysisDepartment_fxpg";
import Hzld from "../../views/Board/analysisDepartment_hzld";
import Hljb from "../../views/Board/analysisDepartment_hljb";
function getNextDate(date, day) {
  //当前时间+1或者-1
  let dd = new Date(date);
  dd.setDate(dd.getDate() + day);
  let y = dd.getFullYear();
  let m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return y + "-" + m + "-" + d;
}
function GetDateTime() {
  let d, s;
  d = new Date();
  s = d.getFullYear() + "-"; //取年份
  s =
    s +
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
    "-"; //取月份
  s += (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " "; //取日期
  s += (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"; //取小时
  s += (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":"; //取分
  s += d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds(); //取秒
  return s;
}
let nowDate = getNextDate(GetDateTime(), +0);
let nowDateJ = getNextDate(nowDate, -7);
export default {
  name: "nursingBoard",
  data() {
    return {
      nowDate, // 现在时间
      nowDateJ, // 结束时间
      bqdm: "", //医院所属病区
      item: "", //同病区不同楼层分组
      checckTemplate: null, //当前点击的模块对应的数组
      isCarousel: true, //是否展示轮播
      bed: {
        bedCount: "100",
        emptyBedCount: "20",
        nonEmptyBedCount: "80",
        brdbfb: "80%",
      }, //床位占比数据
      sshz: [], //手术患者数据
      fxpg1: [], //风险评估数据
      hzld: [], //患者流动数据
      hljb: [], //护理级别数据
      topData: [
        {
          name: "hzzs",
          imgUrl: "~@../../../static/images/Board/yy.png",
          title: "患者总数",
          brNum: "--",
          bfb: "--",
        },
        {
          name: "jrry",
          imgUrl: "~@../../../static/images/Board/sx.png",
          title: "今日入院",
          brNum: "98",
          bfb: "--",
        },
        {
          name: "jrcy",
          imgUrl: "~@../../../static/images/Board/tb.png",
          title: "今日出院",
          brNum: "--",
          bfb: "--",
        },
        {
          name: "jrss",
          imgUrl: "~@../../../static/images/Board/ssd.png",
          title: "今日手术",
          brNum: "--",
          bfb: "--",
        },
      ],
    };
  },
  components: {
    Sshz,
    Fxpg,
    Hzld,
    Hljb,
  },
  methods: {
    async getDataAll() {
      const res = await this.$axios.get(
        "/han/DepartmentAnalysis/GetWBAnalysisData",
        {
          startTime: this.nowDateJ,
          endTime: this.nowDate,
        }
      );
      if (res.result != null) {
        //头部总数
        this.topData[0].brNum = res.result.analysisBasicData.nowCount;
        this.topData[0].bfb = res.result.analysisBasicData.countRate;
        this.topData[1].brNum = res.result.analysisBasicData.nowEnterCount;
        this.topData[1].bfb = res.result.analysisBasicData.enterCountRate;
        this.topData[2].brNum = res.result.analysisBasicData.nowOutCount;
        this.topData[2].bfb = res.result.analysisBasicData.outCountRate;
        this.topData[3].brNum = res.result.analysisBasicData.nowOperationCount;
        this.topData[3].bfb = res.result.analysisBasicData.operationCountRate;
        // 床位占比
        (this.bed = {
          bedCount: res.result.analysisBedProportion.bedCount,
          emptyBedCount: res.result.analysisBedProportion.emptyBedCount,
          nonEmptyBedCount: res.result.analysisBedProportion.nonEmptyBedCount,
          brdbfb:
            parseInt(
              (res.result.analysisBedProportion.nonEmptyBedCount /
                res.result.analysisBedProportion.bedCount) *
                100
            ) + "%",
        }),
        //  手术患者
        (this.sshz = res.result.analysisSurgicalPatient);
        this.fxpg1 = res.result.analysisRiskEvaluation;
        this.hljb = res.result.analysisLevelOfCare;
        this.hzld = res.result.analysisPatientFlow;
        this.qst();
      }
    },
    qst() {
      let than = this;
      const chart = this.$refs.smtz;
      let myChart = this.$echarts.init(zwzbEcharts);
      let option = {
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["70%", "95%"],
            color: ["#ddd", "orange"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: true,
              position: "center",
              formatter: function () {
                return than.bed.brdbfb;
              },
              textStyle: {
                fontSize: "20",
                fontWeight: "bold",
                color: "orange",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: than.bed.emptyBedCount, name: "空床数" },
              { value: than.bed.nonEmptyBedCount, name: "占床数" },
            ],
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
    this.getDataAll();
    let query = this.$route.query;
    this.bqdm = query.bqdm;
    this.item = query.item;
    setInterval(() => {
      //没5分钟刷新一系整体数据
      this.getDataAll();
    }, 60 * 5000 * 12);
  },
};
</script>

<style scoped>
@import url("../../../../static/css/Board.css");
.zwzbul li {
  color: rgb(0, 0, 0);
}
.container-item-right section,
.container-item-right section table {
  height: 930px;
}
.container-item-right header {
  height: 90px;
}
.container-item-right section table thead {
  height: 150px;
}
.container-item-right section table tbody tr th > div:last-child {
  margin-top: 23px;
}
.container-item-right section table tbody tr th > div:first-child {
  margin-top: 0;
}
section table tbody tr th {
  font-weight: inherit;
}
.sdzb {
  margin: 10px;
  padding: 0;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px !important;
}
.sdzb li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
}
.sdzb li img {
  width: 110px;
  height: 110px;
}
.sdzb li > div {
  flex: 1;
  line-height: 33px;
}
.sdzb li > div p {
  margin: 0;
  font-weight: 400;
  text-align: center;
}
.sdzb li > div p:first-child {
  font-size: 18px;
  color: gray;
}
.sdzb li > div p:nth-child(2) {
  font-size: 17px;
  font-weight: bold;
}
.shadow {
  box-shadow: rgb(215 215 215) 2px 2px 9px;
  border-radius: 45px;
  margin: 10px;
  padding: 10px;
}
.zwzb {
  height: 255px;
}
.zwzb-top {
  height: 30px;
  padding-left: 17px;
  line-height: 30px;
}
.zwzb-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zwzb #zwzbEcharts {
  width: 180px;
  height: 180px;
}
.zwzb .zwzb-child {
  line-height: 50px;
}
.sshz {
  height: 455px;
}
.fxpg {
  height: 730px;
  /* width: 740px; */
}
.hzld {
  height: 352px;
}
.hljb {
  height: 352px;
}
</style>
