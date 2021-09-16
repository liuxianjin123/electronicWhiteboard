<template>
  <div class="container" :style="{ background: setBackground }">
    <header>
      <topheader :hospitalName="hospitalName" :wardName="wardName"></topheader>
    </header>
    <section>
      <keep-alive>
        <component
          :is="returnModule"
          ref="mychild"
          @changeIsLoad="changeIsLoad"
        >
        </component>
      </keep-alive>
    </section>
    <footer>
      <a-row type="flex" justify="space-between" align="middle">
        <aside class="asides">
          <ul>
            <li @click="indexPage = 0">
              <img :src="[indexPage == 0 ? homeCheck : home]" alt="" />
              <p :style="{ color: indexPage == 0 ? fontColor : '#fff' }">
                首页
              </p>
            </li>
            <li @click="indexPage = 1">
              <img :src="[indexPage == 1 ? hzCheck : hz]" alt="" />
              <p :style="{ color: indexPage == 1 ? fontColor : '#fff' }">
                患者
              </p>
            </li>
            <li @click="indexPage = 2">
              <img :src="[indexPage == 2 ? pbCheck : pb]" alt="" />
              <p :style="{ color: indexPage == 2 ? fontColor : '#fff' }">
                交接班
              </p>
            </li>
            <li @click="indexPage = 3">
              <img :src="[indexPage == 3 ? jbCheck : jb]" alt="" />
              <p :style="{ color: indexPage == 3 ? fontColor : '#fff' }">
                分析
              </p>
            </li>
          </ul>
        </aside>
        <div class="container-bottom">
          <span @click="loadChildData" id="loadSpan">
            <img :src="darkMode ? nightLoad : whiteLoad" alt="" />
          </span>
          <span @click="fulls">
            <img :src="darkMode ? nightFull : whiteFull" alt="" />
          </span>
          <span @click="toggle">
            <img :src="darkMode ? nightYl : whiteYl" alt="" />
          </span>
        </div>
      </a-row>
    </footer>
  </div>
</template>
<script>
import topheader from "@/components/views/Board/nursingBoardHead";
import nursingBoard from "@/components/views/Board/nursingBoard";
import patientBoard from "@/components/views/Board/patientBoard";
import schedulingBoard from "@/components/views/Board/SchedulingBoard";
import analysisDepartment from "@/components/views/Board/analysisDepartment";
export default {
  name: "Board",
  data() {
    return {
      jb: "static/images/Board/whiteIcon4.png", //交班图标
      jbCheck: "static/images/Board/nightIcon3.png", //交班被选中图标
      pb: "static/images/Board/whiteIcon3.png", //交接班图标
      pbCheck: "static/images/Board/nightIcon3.png", //交接班被选中图标
      hz: "static/images/Board/whiteIcon2.png", //患者图标
      hzCheck: "static/images/Board/nightIcon2.png", //患者被选中图标
      home: "static/images/Board/whiteIcon1.png", //首页
      homeCheck: "static/images/Board/nightIcon1.png", //首页
      nightYl: "static/images/Board/nightYl.png",
      whiteYl: "static/images/Board/whiteYl.png",
      nightLoad: "static/images/Board/nightLoad.png",
      whiteLoad: "static/images/Board/whiteLoad.png",
      nightFull: "static/images/Board/nightFull.png",
      whiteFull: "static/images/Board/whiteFull.png",
      indexPage: 0,
      moduleList: [
        "nursingBoard",
        "patientBoard",
        "schedulingBoard",
        "analysisDepartment"
      ],
      hospitalName: "绵阳市三台县人民医院",
      wardName: "肝胆乳腺科病区",
      darkMode: false,
      full: "fullscreen", //切换全屏图标
      isFullScreen: false, //是否全屏
      fontColor: "#585eda",
      isLoad: true
    };
  },
  components: {
    topheader,
    nursingBoard,
    patientBoard,
    schedulingBoard,
    analysisDepartment
  },
  methods: {
    //点击切换左边的item，顺便切换背景图
    toggle() {
      this.darkMode = !this.darkMode;
      this.$store.commit("updateBoardItem");
    },
    fulls() {
      //全屏&退出全屏
      this.full = this.full == "fullscreen" ? "fullscreen-exit" : "fullscreen";
      if (!this.isFullScreen) {
        this.isFullScreen = true;
        this.$Page.fullScreen();
      } else {
        this.isFullScreen = false;
        this.$Page.exitFull();
      }
    },
    loadChildData() {
      this.isLoad = true;
      this.rotateElement("loadSpan");
      this.$refs.mychild.getDataAll();
    },
    changeIsLoad() {
      this.isLoad = false;
      this.rotateElement("loadSpan");
    },
    rotateElement(loadSpan) {
      document.getElementById(loadSpan).style.transform = this.isLoad
        ? "rotate(180000deg)"
        : "rotate(0deg)";
    }
  },
  computed: {
    returnModule() {
      return this.moduleList[this.indexPage];
    },
    setBackground() {
      return this.darkMode
        ? "url(static/images/Board/night" + (this.indexPage + 1) + ".png)"
        : "url(static/images/Board/white" + (this.indexPage + 1) + ".png)";
    },
    setSrc() {
      return this.darkMode
        ? "static/images/Board/nightIcon" + (this.indexPage + 1) + ".png"
        : "static/images/Board/whiteIcon" + (this.indexPage + 1) + ".png";
    }
  },
  mounted() {
    //this.loadChildData()
  }
};
</script>
<style scoped>
.container {
  width: 1920px;
  height: 1080px;
}
.container section {
  height: 940px;
}
.container header {
  height: 80px;
}
.container footer {
  height: 60px;
}
.container-bottom {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
}
.container-bottom span {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  transition: all 300s linear;
}
.container-bottom span img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.container-bottom span:nth-child(odd) img {
  width: 35px;
  height: 35px;
}
.asides ul {
  cursor: pointer;
  margin-left: 147px;
}
.asides ul li {
  float: left;
  list-style: none;
  color: #fff;
  transition: all 0.3s;
  text-align: center;
}
.asides ul li:nth-child(n + 2) {
  margin-left: 69px;
}
.asides ul li:nth-child(n + 3) {
  margin-left: 63px;
}
.asides ul li:nth-child(n + 4) {
  margin-left: 62px;
}
.asides ul li img {
  line-height: 60px;
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}
.asides ul li p {
  margin: 0;
  font-weight: bold;
}
</style>
