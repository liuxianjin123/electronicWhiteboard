<template>
  <div>
    <div class="tab_h">医生：</div>
    <div
      class="tab_r"
      style="text-align: left; height: calc(100% - 80px); margin-left: 20px"
    >
      <div
        class="p2_tr"
        :class="{ p2_Select: doctor.isEnable }"
        @click="p2_content(p2_doctor, index)"
        v-for="(doctor, index) in p2_doctor"
        :key="index"
      >
        <span>{{ doctor.titleName }}</span>
        <a-icon type="check" style="font-size: 18px" />
      </div>
    </div>
    <div class="tab_h">护士：</div>
    <div
      class="tab_r"
      style="text-align: left; height: calc(100% - 80px); margin-left: 20px"
    >
      <div
        class="p2_tr"
        :class="{ p2_Select: nurse.isEnable }"
        @click="p2_content(p2_nurse, index)"
        v-for="(nurse, index) in p2_nurse"
        :key="index"
      >
        <span>{{ nurse.titleName }}</span>
        <a-icon type="check" style="font-size: 18px" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      p2_doctor: [
        { isEnable: true, titleName: "患者总数" },
        { isEnable: false, titleName: "新入患者" },
        { isEnable: false, titleName: "白班新入" },
        { isEnable: false, titleName: "夜班新入" },
        { isEnable: false, titleName: "转入患者" },
        { isEnable: false, titleName: "转出患者" },
        { isEnable: false, titleName: "病危患者" },
        { isEnable: false, titleName: "病重患者" },
        { isEnable: false, titleName: "手术患者" },
        { isEnable: false, titleName: "弃疗患者" },
        { isEnable: false, titleName: "今日手术患者" },
        { isEnable: false, titleName: "危急值患者" },
        { isEnable: false, titleName: "ICU患者" },
        { isEnable: false, titleName: "危重儿童和新生儿" },
        { isEnable: false, titleName: "卒中中心患者" },
        { isEnable: false, titleName: "急性心肌梗死" },
        { isEnable: false, titleName: "急性脑卒中" },
      ], //交班展示数据设置医生数组
      p2_nurse: [
        { isEnable: true, titleName: "患者总数" },
        { isEnable: false, titleName: "新入患者" },
        { isEnable: false, titleName: "白班新入" },
        { isEnable: false, titleName: "夜班新入" },
        { isEnable: false, titleName: "转入患者" },
        { isEnable: false, titleName: "转出患者" },
        { isEnable: false, titleName: "病危患者" },
        { isEnable: false, titleName: "病重患者" },
        { isEnable: false, titleName: "手术患者" },
        { isEnable: false, titleName: "弃疗患者" },
        { isEnable: false, titleName: "今日手术患者" },
        { isEnable: false, titleName: "危急值患者" },
        { isEnable: false, titleName: "ICU患者" },
        { isEnable: false, titleName: "危重儿童和新生儿" },
        { isEnable: false, titleName: "卒中中心患者" },
        { isEnable: false, titleName: "急性心肌梗死" },
        { isEnable: false, titleName: "急性脑卒中" },
      ], //交班展示数据设置护士数组
    };
  },

  methods: {
    getjjbZssjsz(arr) {
      //获取数据
      if (arr) {
        this.p2_doctor = arr;
      }
      // console.log(arr);
    },
    p2_content(arr, index) {
      if (arr[index].isEnable) {
        arr[index].isEnable = false;
      } else {
        arr[index].isEnable = true;
      }
    },
  },
};
</script>
<style scoped>
.tab_h {
  font-size: 18px;
  font-weight: bold;
}
.p2_tr {
  width: 150px;
  border: 1px solid #ccc;
  margin: 10px;
  display: inline-block;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
.p2_Select {
  border: 1px solid #1f71a0;
  color: #1f71a0;
  font-weight: bold;
}
</style>
