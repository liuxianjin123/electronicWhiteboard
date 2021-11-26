<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="交接班时间范围：">
      <a-switch v-model="form.sjfwkg" />
      <!-- @change="onChange('sjfwkg')" -->
    </a-form-model-item>
    <a-form-model-item v-if="form.sjfwkg" label="交接班开始前：">
      <a-input type="number" class="fenz" v-model="form.jjbstart" /> 分钟
    </a-form-model-item>
    <a-form-model-item v-if="form.sjfwkg" label="交接班开始后：">
      <a-input type="number" class="fenz" v-model="form.jjbend" /> 分钟
    </a-form-model-item>
    <a-form-model-item v-if="form.sjfwkg" label="是否允许迟到交接：">
      <a-radio-group v-model="form.cdjj">
        <a-radio value="是"> 是 </a-radio>
        <a-radio value="否"> 否 </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="交接班提醒：">
      <a-switch v-model="form.txkg" />
    </a-form-model-item>
    <a-form-model-item v-if="form.txkg" label="提前提醒时间：">
      <a-input type="number" class="fenz" v-model="form.txsj" /> 分钟
    </a-form-model-item>
    <a-form-model-item label="交班、接班间隔时间：">
      <a-switch v-model="form.jgsjkg" />
    </a-form-model-item>
    <a-form-model-item v-if="form.jgsjkg" label="间隔时间：">
      <a-input type="number" class="fenz" v-model="form.jgsj" /> 分钟
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        sjfwkg: true, //交接班时间范围
        jjbstart: "", //交接班开始前
        jjbend: "", //交接班开始后
        cdjj: "", //是否允许迟到交接
        txkg: true, //交接班提醒
        txsj: "", //提前提醒时间
        jgsjkg: true, //交班、接班间隔时间
        jgsj: "", //间隔时间
      },
    };
  },

  methods: {
    getjjbSjsz(arr) {
      //获取数据
      if (arr) {
        this.form = arr;
      }
      console.log(arr);
    },
    // onChange(str) {
    //   if (str == "sjfwkg") {
    //     if (this.form[str]) {
    //     } else {
    //     }
    //   } else if (str == "txkg") {
    //     if (this.form[str]) {
    //     } else {
    //     }
    //   } else if (str == "jgsjkg") {
    //     if (this.form[str]) {
    //     } else {
    //     }
    //   }
    //   console.log(this.form[str]);
    // },
  },
};
</script>
<style scoped>
.fenz {
  width: 160px;
}
</style>
