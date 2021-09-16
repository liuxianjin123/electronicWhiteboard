<template>
  <div class="container" :style="[{pointerEvents:($store.state.isjj==true?'auto':'none')}]">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="tops">
        <div class="tops-left">
          <a-icon type="user-add" style="color: cornflowerblue" />
        </div>
        <div class="tops-item" v-if="isEdit == true">
          <ul>
            <li>
              <span>{{ form.bedNumber}}</span>
              <span style="margin-left: 20px">
                <br-icon ref="mychild"></br-icon>
              </span>
            </li>
            <li style="justify-content: space-between">
              <span>
                <span>{{ form.brxb }}</span>
                <span style="margin-left: 20px">{{ form.patientName }}</span>
              </span>
              <a-tooltip placement="left">
                <template slot="title">
                  <span>增加到白板显示</span>
                </template>
                <a-switch default-checked v-model="form.whiteboardDisplay"/>
              </a-tooltip>
            </li>
          </ul>
        </div>
        <div class="tops-item tops-item-last" @click="xzhzAll(1,7,'')" v-else>
          <a-button>选择患者</a-button>
        </div>
      </div>
      <a-form-model-item label="主要诊断">
        <a-input v-model="form.diagnosis" />
      </a-form-model-item>
      <div class="tprbm" @dblclick="xzhzAll(0,7,form.zyh)">
        T：<label><a-input type="number" v-model="form.t" /></label> 
        P：<label><a-input type="number" v-model="form.p"/></label>
        R：<label><a-input type="number" v-model="form.r" /></label>
        BP：<label><a-input type="text" v-model="form.bp"/></label>
      </div>
      <a-form-model-item label="手术名称">
        <a-input v-model="form.surgeryName" />
      </a-form-model-item>
      <a-form-model-item label="手术/分娩">
        <a-date-picker
          v-model="form.surgeryTime"
          show-time
          :format="dateFormat"
          @change="(i,v)=>dataChanges(i,v,'surgeryTime')"
        />
      </a-form-model-item>
      <a-form-model-item label="送回病房">
        <a-date-picker
          v-model="form.returnTime"
          show-time
          :format="dateFormat"
          @change="(i,v)=>dataChanges(i,v,'returnTime')"
        />
      </a-form-model-item>
      <a-form-model-item label="麻醉方式">
        <a-input v-model="form.anesthesia" />
      </a-form-model-item>
      <a-form-model-item label="输入量">
        <a-input v-model="form.input" />
      </a-form-model-item>
      <a-form-model-item label="引入量">
        <a-input v-model="form.introducedAmount" />
      </a-form-model-item>
      <a-form-model-item label="大便">
        <a-input v-model="form.stool" />
      </a-form-model-item>
      <a-form-model-item label="小便">
        <a-input v-model="form.urinate" />
      </a-form-model-item>
      <a-form-model-item label="引流管量">
        <a-input v-model="form.drainageTubeVolume" />
      </a-form-model-item>
      <a-form-model-item label="白班病情">
        <a-input v-model="form.dayShiftCondition" type="textarea" />
      </a-form-model-item>
      <a-form-model-item label="上夜病情">
        <a-input v-model="form.lastNightCondition" type="textarea" />
      </a-form-model-item>
      <a-form-model-item label="下夜病情">
        <a-input v-model="form.nextNightCondition" type="textarea" />
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import brIcon from "./brIcon";
import obj from "../../../../../static/js/jjbEdit";
export default {
  data() {
    return {
        dateFormat: "YYYY-MM-DD HH:mm",
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
        form: {
        type: "hlShioverSurgicalPatientDtos",
        title: "手术患者",
        id: null,
        tmh: null,
        zyh: null,
        orderOfClassesId:localStorage.orderOfClassesId,
        handoverTime: localStorage.handoverTime,
        confirmTheShiftTime: null,
        succeedTime: null,
        isHandover: false,
        isSucceed: false,
        bedNumber: null,
        patientName: null,
        diagnosis: null,
        surgeryName: null,
        surgeryTime: null,
        returnTime: null,
        anesthesia: null,
        t: null,
        p: null,
        r: null,
        bp: null,
        input: null,
        introducedAmount: null,
        drainageTubeVolume: null,
        stool: null,
        urinate: null,
        dayShiftCondition: null,
        lastNightCondition: null,
        nextNightCondition: null,
        whiteboardDisplay: false,
        whetherToGenerate: false,
        idBeforeGeneration: null,
      }
    };
  },
  props:obj.props,
  watch:obj.watch,
  mounted() {
    if(this.isEdit) {
      this.form = JSON.parse(JSON.stringify(this.editRowData));
    }
  },
  methods: {
    onSubmit() {
      this.$emit("ruquestData", this.form);
    },
    dataChanges(i, v, r) {
      this.form[r] = v;
    },
    //7.8胖纸
    xzhzAll(type,dataType,zyh){
      this.$emit('openxrbr',type,dataType,zyh);
    },
    esdd(val){
      this.$refs.mychild.parentHandleclick(val);
    }
  },
  components: {
    brIcon,
  }
};
</script>
<style scoped>
@import url("../../../../../static/css/jjbModel.css");
</style>
