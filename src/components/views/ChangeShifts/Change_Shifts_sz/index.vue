<template>
  <div class="container">
    <div class="box">
      <div class="header">
        <span
          ><img
            src="../../../../../static/images/ChangeShifts_now/jjbsz_tb.png"
            alt="交接班设置"
            class="header-img"
            title="交接班设置"
          />
          交接班设置
        </span>
      </div>
      <div class="fgx"></div>
      <a-form :label-col="{ span: 1 }" :wrapper-col="{ span: 4 }">
        <a-form-item label=" * 科室">
          <a-select v-model="keshi" placeholder="请选择科室">
            <a-select-option v-for="i in keshiarr" :key="i.id" :value="i.id">{{
              i.name
            }}</a-select-option>
          </a-select>
          <div class="button_right">
            <a-button type="primary" @click="preservation"> 保存 </a-button>
            <a-button @click="Reset"> 重置 </a-button>
          </div>
        </a-form-item>
      </a-form>
      <div class="content">
        <div v-for="i in titles" :key="i.id" v-show="i.isshow">
          <div class="titles" @click="onisopen(i.id)">
            <a-row>
              <a-col :span="23">
                <i class="Subtitle"></i>
                <span
                  ><b style="font-size: 18px"> {{ i.name }} </b></span
                >
              </a-col>
              <a-col :span="1">
                <a-icon
                  :type="i.isopen ? 'caret-down' : 'caret-right'"
                  style="font-size: 33px; color: rgba(25, 109, 157, 1)"
                />
              </a-col>
            </a-row>
          </div>
          <div class="content_Subtitle" v-show="i.isopen">
            <jjb-bcsz v-if="i.code == 'jjbBcsz'" ref="jjbBcsz"></jjb-bcsz>
            <jjb-zssjsz
              v-if="i.code == 'jjbZssjsz'"
              ref="jjbZssjsz"
            ></jjb-zssjsz>
            <ycz-xssz v-if="i.code == 'yczXssz'" ref="yczXssz"></ycz-xssz>
            <jjb-sjsz v-if="i.code == 'jjbSjsz'" ref="jjbSjsz"></jjb-sjsz>
            <xz-wzly v-if="i.code == 'xzWzly'" ref="xzWzly"></xz-wzly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jjbBcsz from "../../../views/ChangeShifts/Change_Shifts_sz/JjbBcsz";
import jjbSjsz from "../../../views/ChangeShifts/Change_Shifts_sz/JjbSjsz";
import jjbZssjsz from "../../../views/ChangeShifts/Change_Shifts_sz/JjbZssjsz";
import yczXssz from "../../../views/ChangeShifts/Change_Shifts_sz/YczXssz";
import xzWzly from "../../../views/ChangeShifts/Change_Shifts_sz/XzWzly";
export default {
  data() {
    return {
      keshi: 2, //选中科室
      keshiarr: [
        { id: 1, name: "呼吸道科" },
        { id: 2, name: "急诊科" },
        { id: 3, name: "内科" },
      ], //所有科室
      titles: [
        //小标题展示 名称 id 是否显示  是否展开 对应代码
        {
          name: "交接班班次设置",
          id: 0,
          isshow: true,
          isopen: true,
          code: "jjbBcsz",
        },
        {
          name: "交接班展示数据设置",
          id: 1,
          isshow: true,
          isopen: true,
          code: "jjbZssjsz",
        },
        {
          name: "异常值显示设置",
          id: 2,
          isshow: true,
          isopen: true,
          code: "yczXssz",
        },
        {
          name: "交接班时间设置",
          id: 3,
          isshow: true,
          isopen: true,
          code: "jjbSjsz",
        },
        {
          name: "新增物资来源",
          id: 4,
          isshow: false,
          isopen: true,
          code: "xzWzly",
        },
      ],
      p1_Frequencydelete: [], //交接班班次设置 删除掉的数据
      jjbZssjsz: "", //交接班展示数据设置
      jjbBcsz: "", //交接班班次设置数据
      yczXssz: "", //异常值显示设置
    };
  },
  components: {
    jjbBcsz,
    jjbSjsz,
    jjbZssjsz,
    yczXssz,
    xzWzly,
  },
  mounted() {
    this.getHandoverdata();
  },
  methods: {
    onisopen(id) {
      this.titles[id].isopen = !this.titles[id].isopen;
    },
    async preservation() {
      console.log(this.$refs.jjbBcsz[0].p1_Frequency); //交接班班次设置数据
      console.log(this.$refs.jjbBcsz[0].p1_Frequencydelete); //交接班班次设置 删除掉的数据
      console.log(this.$refs.jjbZssjsz[0].p2_doctor); //交接班展示数据设置 医生数据
      console.log(this.$refs.jjbZssjsz[0].p2_nurse); //交接班展示数据设置 护士数据
      console.log(this.$refs.yczXssz[0].p3_Outliers); //异常值显示设置 数据
      console.log(this.$refs.yczXssz[0].Outliers); //异常值显示设置 是否将异常值患者添加到白板 是否开启
      console.log(this.$refs.jjbSjsz[0].form); //异常值显示设置 是否将异常值患者添加到白板 是否开启
      //点击保存
      this.p1_Frequencydelete = this.$refs.jjbBcsz[0].p1_Frequencydelete;

      let preservation = [];
      preservation.push({
        hlShioverContent: this.$refs.jjbZssjsz[0].p2_doctor,
        hlShioverOutlier: this.$refs.yczXssz[0].p3_Outliers,
        hlShioverOrderOfClass: this.$refs.jjbBcsz[0].p1_Frequency,
      });
      if (this.p1_Frequencydelete.length > 0) {
        await this.onpotdelete(this.p1_Frequencydelete);
      }
      const res = await this.$axios.post(
        "/han/handover/saveShiftSetting",
        preservation[0]
      );
      console.log(res);
      if (res.code == 0) {
        this.$message.success("保存成功！");
      } else {
        this.$message.warning(res.msg);
      }
      await this.getHandoverdata();
    },
    async onpotdelete(id) {
      //删除方法
      const res = await this.$axios.del(
        "/han/handover/deleteOrderOfClasses",
        id
      );
      console.log(res);
    },
    Reset() {
      console.log("点击重置");
      this.getHandoverdata();
    },
    async getHandoverdata() {
      //获取数据
      const res = await this.$axios.get("/han/handover/getShiftSetting", {});
      if (res.code == 0) {
        this.jjbZssjsz = res.result.hlShioverContent; //交接班展示数据设置
        this.yczXssz = res.result.hlShioverOutlier; //交接班班次设置数据
        this.jjbBcsz = res.result.hlShioverOrderOfClass; //交接班班次设置数据
        this.p1_Frequencydelete = []; //删除数组清空
        //向子页面传值
        this.$refs.jjbBcsz[0].getjjbBcsz(this.jjbBcsz);
        this.$refs.jjbZssjsz[0].getjjbZssjsz(this.jjbZssjsz);
        this.$refs.yczXssz[0].getyczXssz(this.yczXssz);
      }
      console.log(res);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
  background: #f2f2f2;
  height: 100%;
}
.box {
  background: #fff;
  height: 100%;
  border-radius: 5px;
  padding: 10px;
}
.header {
  padding: 15px;
  height: 60px;
  align-items: center;
  display: flex;
  /* padding: 0; */
  justify-content: space-between;
}
.box .header-img {
  width: 36px;
  vertical-align: top;
}
.box .header {
  font-size: 23px;
  color: #000;
  /* font-weight: bold; */
}
.fgx {
  justify-content: flex-start;
  border-top: 1px solid #d9d9d9;
  margin-bottom: 10px;
}
.content {
  margin: 10px;
  /* border: 1px solid #000; */
  height: calc(100vh - 230px);
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  overflow-y: auto;
}
.content::-webkit-scrollbar {
  /*隐藏滚动条 */
  display: none;
}
.titles {
  /* display: flex; */
  align-items: center;
  /* justify-content: space-between; */
  margin: 15px 0;
}

.titles .Subtitle {
  display: inline-block;
  width: 5px;
  height: 28px;
  background: rgba(25, 109, 157, 1);
  vertical-align: middle;
  border-radius: 3px;
  margin-right: 15px;
  margin-left: 5px;
}
.button_right {
  position: fixed;
  right: 30px;
  top: 75px;
}
/* .content_Subtitle {
  height: 300px;
  border: 1px solid red;
} */
</style>
