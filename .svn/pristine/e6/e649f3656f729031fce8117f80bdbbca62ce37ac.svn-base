<template>
  <div class="container" id="container">
    <div class="container-top">
      <div class="container-item-right">
        <section class="item-config">
          <a-spin :spinning="false" size="large">
            <div @click="echartViews($event)">
              <template v-if="brxxData != null">
                <vue-seamless-scroll
                  :data="brxxData"
                  :class-option="classOption"
                  class="seamless-warp"
                >
                  <ul class="item">
                    <li
                      class="lis"
                      v-for="(item, index) in brxxData"
                      :key="index"
                    >
                      <div
                        class="Patientlabel"
                        :class="[
                          item.bwbz
                            ? 'PatientlabelRed'
                            : item.bzbz
                            ? 'PatientlabelOrange'
                            : ''
                        ]"
                        :style="{
                          background: $store.state.board.darkMode
                            ? $store.state.board.darkModeBg
                            : $store.state.board.whiteBg,
                          boxShadow: $store.state.board.darkMode
                            ? $store.state.board.darkModeShadow
                            : $store.state.board.whiteShadow
                        }"
                      >
                        <i
                          :data-zyh="item.zyh"
                          :data-brxm="item.brxm"
                          :data-brch="item.bcmc"
                        ></i>
                        <div
                          class="brRight"
                          :style="{
                            color: $store.state.board.darkMode
                              ? $store.state.board.darkModeColor
                              : $store.state.board.whiteColor
                          }"
                        >
                          <div class="row1">
                            <span
                              class="color-Icon"
                              :class="[
                                item.bwbz
                                  ? 'color-IconRed'
                                  : item.bzbz
                                  ? 'color-IconOrange'
                                  : ''
                              ]"
                            ></span
                            ><span
                              :style="{
                                color: item.bwbz
                                  ? 'red'
                                  : item.bzbz
                                  ? '#F6BA1C'
                                  : ''
                              }"
                              >{{ item.bwbz ? "重" : ""
                              }}{{ item.bzbz ? "危" : "" }}</span
                            >
                          </div>
                          <div class="row2">
                            <b>{{ item.bcmc }}床</b><span>{{ item.brxb }}</span
                            ><span>{{
                              item.brxm.length == 2
                                ? "*" + item.brxm.substr(1, 1)
                                : item.brxm.length == 3
                                ? "**" + item.brxm.substr(2, 1)
                                : "**" + item.brxm.substr(2, 2)
                            }}</span>
                          </div>
                          <div class="row3">
                            <p class="zd">
                              <span>主管医生:{{ item.主管医生姓名 }}</span
                              ><span>责任护士:{{ item.责任护士姓名 }}</span>
                            </p>
                          </div>
                          <div class="row5">
                            <ul>
                              <li
                                :class="[
                                  item.ycdf != '' && item.ycdf <= 12
                                    ? 'cl_1'
                                    : item.ycdf != '' &&
                                      item.ycdf >= 13 &&
                                      item.ycdf <= 15
                                    ? 'cl_2'
                                    : ''
                                ]"
                              >
                                疮
                              </li>
                              <li
                                :class="[
                                  item.dddf != '' && item.dddf < 41
                                    ? 'cl_1'
                                    : item.dddf != '' &&
                                      item.dddf > 40 &&
                                      item.dddf <= 61
                                    ? 'cl_2'
                                    : ''
                                ]"
                              >
                                跌
                              </li>
                              <li
                                :class="[
                                  item.gddf != '' && item.gddf >= 11
                                    ? 'cl_1'
                                    : ''
                                ]"
                              >
                                管
                              </li>
                              <li
                                :class="[
                                  item.ttdf != '' && item.ttdf > 7
                                    ? 'cl_1'
                                    : item.ttdf != '' &&
                                      item.ttdf >= 3 &&
                                      item.ttdf <= 6
                                    ? 'cl_2'
                                    : ''
                                ]"
                              >
                                疼
                              </li>
                              <li
                                :class="[
                                  item.adldf != '' && item.adldf < 41
                                    ? 'cl_1'
                                    : item.adldf != '' &&
                                      item.adldf > 40 &&
                                      item.adldf <= 61
                                    ? 'cl_2'
                                    : ''
                                ]"
                              >
                                ADL
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </vue-seamless-scroll>
              </template>
            </div>
          </a-spin>
        </section>
        <footer
          :style="{
            background: $store.state.board.darkMode
              ? $store.state.board.darkModeBg
              : $store.state.board.whiteBg,
            boxShadow: $store.state.board.darkMode
              ? $store.state.board.darkModeShadow
              : $store.state.board.whiteShadow
          }"
        >
          <div>
            <div
              class="footer-item"
              :style="{
                borderColor: item.style[0],
                color: item.style[1],
                background: item.style[2]
              }"
              v-for="item in other[0]"
              :key="item.Id"
            >
              {{ item.title }}
              <span>{{ item.childrenValue }}</span>
            </div>
          </div>
          <div>
            <div
              class="footer-item"
              :style="{
                borderColor: item.style[0],
                color: item.style[1],
                background: item.style[2]
              }"
              v-for="item in other[1]"
              :key="item.Id"
            >
              {{ item.title }}
              <span>{{ item.childrenValue }}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "nursingBoard",
  data() {
    return {
      checckTemplate: null, //当前点击的模块对应的数组
      isCarousel: true, //是否展示轮播
      brxxData: null,
      timer: null, //刷新数据定时器
      step: 0.5,
      other: [
        [
          {
            Id: "btn_tjhl",
            title: "特级护理",
            childrenValue: 0,
            style: ["#F24040", "#F24040", ""]
          },
          {
            Id: "btn_yjhl",
            title: "一级护理",
            childrenValue: 0,
            style: ["#FFB5DD", "#FFB5DD", ""]
          },
          {
            Id: "btn_ejhl",
            title: "二级护理",
            childrenValue: 0,
            style: ["#196D9D", "#ffffff", "#196D9D"]
          },
          {
            Id: "btn_sjhl",
            title: "三级护理",
            childrenValue: 0,
            style: ["#18B073", "#18B073", ""]
          },
          {
            Id: "btn_bz",
            title: "病重",
            childrenValue: 0,
            style: ["#F7BA2B", "#F7BA2B", ""]
          },
          {
            Id: "btn_bw",
            title: "病危",
            childrenValue: 0,
            style: ["#F40000", "#F40000", ""]
          }
        ],
        [
          {
            Id: "btn_qbcw",
            title: "全部床位",
            childrenValue: 0,
            style: ["#196D9D", "#196D9D", ""]
          },
          {
            Id: "btn_zc",
            title: "在床",
            childrenValue: 0,
            style: ["#196D9D", "#196D9D", ""]
          },
          {
            Id: "btn_kc",
            title: "空床",
            childrenValue: 0,
            style: ["#196D9D", "#196D9D", ""]
          }
        ]
      ]
    };
  },
  components: {
    vueSeamlessScroll
  },
  computed: {
    classOption() {
      return {
        step: this.step, // 数值越大速度滚动越快
        limitMoveNum: 31, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 500 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  methods: {
    async getDataAll() {
      const res = await this.$axios.get("/api/WhiteBoardApi/GetBrxxList", {
        bqdm: this.$route.query.bqdm,
        lx:0
      });
      this.$emit("changeIsLoad");
      console.log(res)
      if (res.result != null) {
        this.brxxData = res.result;
      }
      this.TimeToLoad();
    },
    async getDataTopAll() {
      var datas = {
        bqdm: this.$route.query.bqdm,
        lc: this.$route.query.lc,
        stime: "2021-09-08 08:00:00",
        etime: "2021-09-09 08:00:00",
        userCode:"",
        utype:1
      };
      const res = await this.$axios.get(
        "/api/WhiteBoardApi/GetWhiteBoardData",
        datas
      );
      console.log(res,666)
      if (res.result.length>1) {
        for (var i = 0; i < this.other[0].length; i++) {
          this.other[0][i].childrenValue = this.otherVal(
            this.other[0][i].Id,
            res.result
          );
        }
        for (var ii = 0; ii < this.other[1].length; ii++) {
          this.other[1][ii].childrenValue = this.otherVal(
            this.other[1][ii].Id,
            res.result
          );
        }
      }
    },
    otherVal(name, obj) {
      var msg = "";
      for (var i of obj) {
        if (i.id == name) {
          msg = i.val;
        }
      }
      return msg;
    },
    TimeToLoad() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        //每10分钟刷新一次整体数据
        this.getDataAll();
      }, 60 * 1000 * 5);
    },
  },
  mounted() {
    this.getDataAll();
    this.getDataTopAll();
  }
};
</script>

<style scoped>
@import url("../../../../static/css/Board.css");
.container-item-right section {
  height: 850px;
}
footer {
  width: 1890px;
  height: 60px;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 10px;
  background: #f2f7f9;
  box-shadow: rgba(215, 215, 215, 0.996) 5px 5px 5px;
}
footer > div:first-child {
  float: left;
}
footer > div:last-child {
  float: right;
}
footer > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.footer-item {
  height: 40px;
  padding: 0 10px;
  border: 1px solid #fff;
  line-height: 40px;
  text-align: center;
  border-radius: 17px;
  width: 125px;
  margin: 0 10px;
  font-weight: bold;
}
.container-item-right header {
  height: 90px;
}
.seamless-warp {
  height: 850px;
  overflow: hidden;
}

.Patientlabel {
  background-color: #f2f7f9;
  width: 292px;
  height: 145px;
  margin: 12px;
  border-radius: 15px;
  box-shadow: rgba(215, 215, 215, 0.996) 5px 5px 5px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #fff;
  position: relative;
}
.Patientlabel > i {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}
.PatientlabelRed {
  border-color: #da1919;
}
.PatientlabelOrange {
  border-color: #f7ba2a;
}
.color-IconRed {
  background: #da1919 !important;
}
.color-IconOrange {
  background: #f7ba2a !important;
}
.brRight {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  line-height: 29px;
  width: 100%;
  color: #000;
}
.brRight .row1,
.brRight .row2,
.brRight .row3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.brRight .row1 {
  line-height: 26px;
}
.brRight .row1 .color-Icon {
  width: 35px;
  height: 15px;
  background: #2288cc;
  border-radius: 8px;
  margin-right: 10px;
}
.brRight .row2 * {
  margin-right: 35px;
}
.brRight .zd {
  font-size: 14px;
  width: 243px;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.Patientlabel .row5 ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.Patientlabel .row5 li {
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #196db6;
  background-color: #c5e6ff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  font-size: 13px;
  margin-top: 4px;
}

.Patientlabel .cl_1 {
  background-color: #ffcfcf !important; /*严重*/
  color: #cc0000 !important;
}

.Patientlabel .cl_2 {
  background-color: #ffdba4 !important; /* 重*/
  color: #ff5722 !important;
}

section ul {
  margin: 0;
  padding: 0;
}
.lis {
  float: left;
}
</style>
