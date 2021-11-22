<template>
  <div class="container" id="container">
    <div class="container-item-right">
      <header>
        <footer class="header_footer">
          <div class="" v-for="item in topDataList" :key="item.id">
            <a-badge status="processing" />{{ item.title }}
            <span>{{ item.num == "" ? "--" : item.num }}人</span>
          </div>
        </footer>
      </header>
      <section
        class="item-config"
        :style="{ border: whole.state ? '10px solid #fff' : '0px solid #fff' }"
      >
        <whole v-if="whole.state"></whole>
        <sign v-if="sign.state"></sign>
      </section>
      <footer>
        <a-menu
          v-model="current"
          mode="horizontal"
          style="border-radius: 30px; height: 0.5rem"
        >
          <a-menu-item
            key="whole"
            @click="
              (str) => {
                whole = whole2;
                sign = sign2;
              }
            "
          >
            <span class="weight" :style="whole.color">
              <img :src="whole.img" width="20px" alt="" /> 全部
            </span>
          </a-menu-item>
          <a-menu-item
            key="SchedulingBoard"
            @click="
              (str) => {
                whole = whole1;
                sign = sign1;
              }
            "
          >
            <span class="weight" :style="sign.color">
              <img :src="sign.img" width="20px" alt="" /> 已标记
            </span>
          </a-menu-item>
        </a-menu>
      </footer>
    </div>
  </div>
</template>
<script>
import obj from "../../../../static/js/hljjb";
import whole from "../../views/Board/SchedulingBoard_whole";
import sign from "../../views/Board/SchedulingBoard_sign";
import jwtDecode from "jwt-decode";
export default {
  name: "nursingBoard",
  data() {
    return {
      hospitalName: "绵阳市三台县人民医院", //医院名称
      bqdm: "", //医院所属病区
      item: "", //同病区不同楼层分组
      spinning: true,
      wardName: "XXX病区", //病区名称
      dates: "8888-88-88 88:88 星期一", //当前时间
      jb: "../../../../static/images/Board/jb.png", //交班图标
      jbCheck: "../../../../static/images/Board/jbChecked.png", //交班被选中图标
      pb: "../../../../static/images/Board/pb.png", //交接班图标
      pbCheck: "../../../../static/images/Board/pbChecked.png", //交接班被选中图标
      hz: "../../../../static/images/Board/hz.png", //患者图标
      hzCheck: "../../../../static/images/Board/hzChecked.png", //患者被选中图标
      home: "../../../../static/images/Board/home.png", //首页
      homeCheck: "", //首页被选中
      containerBg: "url(../../../../static/images/Board/3.png)", //点击那个就切换那个对应的背景（主要设置item处的圆角）
      isActive: "交接班", //点击那个item给那个加上类名
      full: "fullscreen", //切换全屏图标
      play: "play-circle", //播放图标
      checckTemplate: null, //当前点击的模块对应的数组
      isSpin: true, //刷新图标动起来
      isFullScreen: false, //是否全屏
      isCarousel: true, //是否展示轮播
      brxxData: null,

      // 新加
      current: ["whole"],
      topDataList: obj.topDataList, //顶部显示的所有项目数据
      whole: {
        state: true,
        img: "../../../../static/images/ChangeShifts/qb1.png",
        color: "color:#3d84ad",
      },
      sign: {
        state: false,
        img: "../../../../static/images/ChangeShifts/bj2.png",
        color: "color:#666",
      },
      whole2: {
        state: true,
        img: "../../../../static/images/ChangeShifts/qb1.png",
        color: "color:#3d84ad",
      },
      sign2: {
        state: false,
        img: "../../../../static/images/ChangeShifts/bj2.png",
        color: "color:#666",
      },
      whole1: {
        state: false,
        img: "../../../../static/images/ChangeShifts/qb2.png",
        color: "color:#666",
      },
      sign1: {
        state: true,
        img: "../../../../static/images/ChangeShifts/bj1.png",
        color: "color:#3d84ad",
      },
    };
  },
  components: {
    whole,
    sign,
  },
  computed: {},
  methods: {
    echartViews(e) {
      let target = e.target;
      if (target.tagName == "I") {
        let zyh = target.getAttribute("data-zyh"),
          brxm = target.getAttribute("data-brxm"),
          brch = target.getAttribute("data-brch");
        if (zyh && brxm && brch) {
          this.$router.push({
            path: "/tendencyEchart",
            query: {
              zyh: zyh,
              brxm: brxm,
              brch: brch,
              bqdm: this.bqdm,
              item: this.item,
              wardName: this.wardName,
            },
          });
        }
      }
    },
    async getDataAll() {
      this.isSpin = true;
      this.spinning = true;
      const res = await this.axios.get("/han/HandoverProc/GetPatientNumber/0");
      if (res.result) {
        this.isSpin = !this.isSpin;
        this.spinning = !this.spinning;
        for (let i in res.result[0]) {
          for (let y in this.topDataList) {
            if (i == this.topDataList[y].name) {
              this.topDataList[y].num = res.result[0][i];
            }
          }
        }
      }
    },
    otherVal(name, obj) {
      let msg = "";
      for (let i in obj) {
        if (i == name) {
          msg = obj[i];
        }
      }
      return msg;
    },
    async denglu() {
      //登录获取token
      let obj = {
        account: "0299",
        passWord: "1",
        macAddress: "Duis culpa laboris",
      };
      const res = await this.$axios.post("/auth/authorization/loging", obj);
      sessionStorage.setItem("token", "Bearer " + res.result);
      const decode = jwtDecode(res.result);
      this.$store.commit("updateOperatorMsg", decode);
    },
  },
  mounted() {
    if (sessionStorage.getItem("pbybj")) {
      this.whole = this.whole1;
      this.sign = this.sign1;
      this.current = ["SchedulingBoard"];
    } //进入查看昨日后返回上页到已 标记页面
    sessionStorage.setItem("pbybj", ""); //默认刷新浏览器到全部页面

    this.denglu();

    this.$Page.fullScreen();
    setInterval(() => {
      //页面创建完成加载当前时间。1s一次
      this.dates = this.$Page.getDate();
    }, 1000);
    let query = this.$route.query;
    this.bqdm = "0005";
    this.item = 1;
    //this.getDataAll();
  },
};
</script>

<style scoped>
@import url("../../../../static/css/Board.css");
.container-item-right section {
  height: 6.3rem;
  width: 95%;
}
footer {
  width: 95%;
  margin-left: 2.5%;
  height: 0.5rem;
  border-radius: 30px;
  margin-top: 10px;
  background: #fff;
  padding-left: 2%;
  box-shadow: rgba(215, 215, 215, 0.996) 5px 5px 5px;
}

.container-item-right header {
  height: 90px;
}

/* 新 */
.header_footer {
  font-size: 17px;
  font-weight: 600;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
.header_footer > div {
  flex: 1;
}
.header_footer >>> .ant-badge-status-dot {
  width: 13px;
  height: 13px;
}
.weight {
  font-weight: 600;
}
.item-config {
  border-radius: 20px;
}
</style>
