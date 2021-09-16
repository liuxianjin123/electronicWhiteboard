<template>
  <div
    class="container"
    :style="[{ pointerEvents: $store.state.isjj == true ? 'auto' : 'none' }]"
  >
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="tops">
        <div class="tops-left">
          <a-icon type="user-add" style="color: cornflowerblue" />
        </div>
        <div class="tops-item" v-if="isEdit == true">
          <ul>
            <li>
              <span>{{ form.bedNumber }}</span>
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
                <a-switch default-checked v-model="form.whiteboardDisplay" />
              </a-tooltip>
            </li>
          </ul>
        </div>
        <div class="tops-item tops-item-last" @click="xzhzAll(1, 7, '')" v-else>
          <a-button>选择患者</a-button>
        </div>
      </div>
      <a-form-model-item label="主要诊断">
        <a-input v-model="form.diagnosis" />
      </a-form-model-item>
      <a-form-model-item label="护理级别">
        <a-select v-model="form.levelOfCare">
          <a-select-option value="一级护理">一级护理</a-select-option>
          <a-select-option value="二级护理">二级护理</a-select-option>
          <a-select-option value="三级护理">三级护理</a-select-option>
          <a-select-option value="特级护理">特级护理</a-select-option>
        </a-select>
      </a-form-model-item>
      <div class="tprbm" @dblclick="xzhzAll(0, 7, form.zyh)">
        T：<label><a-input type="number" v-model="form.t" /></label> P：<label
          ><a-input type="number" v-model="form.p"
        /></label>
        R：<label><a-input type="number" v-model="form.r" /></label> BP：<label
          ><a-input type="text" v-model="form.bp"
        /></label>
      </div>
      <a-form-model-item label="特殊属性">
        <div class="dict-gruoup">
          <div class="dict">
            <span v-for="i in dicts" :key="i">
              <label
              class="tssx"
              :class="[
                form.specialProperty.indexOf(''+i+'') != -1 ? 'tssxCheck' : '',
              ]"
              ><input
                type="checkbox"
                v-model="form.specialProperty"
                :value="i"
              />{{i}}</label>
            </span>
          </div>
          <span>
            <a-button
              @click="showDict"
              style="float: right"
              shape="circle"
              icon="dash"
            />
          </span>
        </div>
      </a-form-model-item>
      <a-form-model-item label="特殊描述">
        <a-input v-model="form.specialDescription" />
      </a-form-model-item>
      <a-form-model-item label="白板病情">
        <a-input v-model="form.dayShiftCondition" type="textarea" />
      </a-form-model-item>
      <a-form-model-item label="上夜病情">
        <a-input v-model="form.lastNightCondition" type="textarea" />
      </a-form-model-item>
      <a-form-model-item label="下夜病情">
        <a-input v-model="form.nextNightCondition" type="textarea" />
      </a-form-model-item>
    </a-form-model>
     <a-modal
      v-model="dictShow"
      width="500px"
      title="编辑特殊属性字典"
      okText="添加属性"
      @ok="handleOk">
        <a-table
          :columns="selectBr"
          :data-source="selectBrDetailData"
          bordered
          :pagination="false"
          size="small"
          :rowKey="
            (record, index) => {
              return index;
            }
          "
        >
          <template slot="address" slot-scope="text, record,index">
              <a  style="color: red"
                @click.stop="submintClass(text,record,index)">删除</a
              >
          </template>
        </a-table>
    </a-modal>
    <a-modal
      v-model="addDict"
      width="300px"
      title="添加特殊属性字典"
      okText="确定"
      @ok="addOk">
         <a-form-item label="属性名称">
            <a-input
              v-model="sxmc"
            />
          </a-form-item>
    </a-modal>
  </div>
</template>
<script>
import brIcon from "./brIcon";
import obj from "../../../../../static/js/jjbEdit";
export default {
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 17 },
      dicts:[],
      dictShow:false,
      addDict:false,
      sxmc:null,
      selectBrDetailData:[
          {name:'跌倒'},
          {name:'压疮'},
          {name:'意外'},
          {name:'难产'},
          {name:'好吃'},
          {name:'可怜兮兮'},
          {name:'不思进取'},
          {name:'勇敢牛牛'},
          {name:'不怕困难'},
        ],
      selectBr:[
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          align: 'center',
          width: 50,
          customRender: (text,record,index) => {
            const obj = {
              children: index+1,
              attrs: {},
            };
            return obj;
          }
        },
        {
          title: "属性名称",
          dataIndex: "name",
          align:'center',
          width: "100px",
        },
        {
          title: "操作",
          width: "120px",
          align: 'center',
          scopedSlots: { customRender: "address" },
        },
      ],
      form: {
        type: "hlShioverSpecialPatientDtos",
        title: "特殊患者",
        id: null,
        tmh: null,
        zyh: null,
        orderOfClassesId: localStorage.orderOfClassesId,
        handoverTime: localStorage.handoverTime,
        confirmTheShiftTime: null,
        succeedTime: null,
        isHandover: false,
        isSucceed: false,
        bedNumber: null,
        patientName: null,
        diagnosis: null,
        levelOfCare: null,
        t: null,
        p: null,
        r: null,
        bp: null,
        specialProperty: [],
        specialDescription: null,
        dayShiftCondition: null,
        lastNightCondition: null,
        nextNightCondition: null,
        whiteboardDisplay: false,
        whetherToGenerate: false,
        idBeforeGeneration: null,
      },
    };
  },
  props: obj.props,
  watch: obj.watch,
  mounted() {
    this.copyFlied();
    if (this.isEdit) {
      this.form = JSON.parse(JSON.stringify(this.editRowData));
      this.form.specialProperty = this.form.specialProperty.split(",");
    }
  },
  methods: {
    onSubmit() {
      let newform = JSON.parse(JSON.stringify(this.form));
      newform.specialProperty = newform.specialProperty.join(",");
      this.$emit("ruquestData", newform);
    },
    dataChanges(i, v, r) {
      this.form[r] = v;
    },
    //7.8胖纸
    xzhzAll(type, dataType, zyh) {
      this.$emit("openxrbr", type, dataType, zyh);
    },
    esdd(val) {
      this.$refs.mychild.parentHandleclick(val);
    },
    handleOk(){
      this.addDict= true;
    },
    showDict(){
      this.dictShow = true;
    },
    submintClass(name,rowKey,idx){
      console.log(name.name)
    },
    addOk(){
      if(this.sxmc){
        this.selectBrDetailData.push({name:this.sxmc})
        this.copyFlied();
        this.addDict = false;
      }else{
        this.$message.warning("未输入任何值!")
      }
      console.log(this.sxmc+456565656)
    },
    copyFlied(){
      this.dicts=[];
      for(var i of this.selectBrDetailData){
        console.log(i.name)
        this.dicts.push(i.name)
      } 
    }
  },
  components: {
    brIcon,
  },
};
</script>
<style scoped>
@import url("../../../../../static/css/jjbModel.css");
.tssx {
  width: 40px;
  background-color: #fff;
  color: #000;
  padding: 4px 8px;
  margin: 2px;
  border-radius: 16px;
  font-size: 13px;
  border: 1px solid #1e9fff;
}
.tssx input {
  width: 0;
}
.tssxCheck {
  border: 1px solid #1e9fff;
  background-color: #1e9fff;
  color: #fff;
}
.dict-gruoup{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.dict{
  flex: 1;
}
.dict span{
  display: inline-block;
}
.dict-gruoup>span{
  width:40px;
}
</style>
