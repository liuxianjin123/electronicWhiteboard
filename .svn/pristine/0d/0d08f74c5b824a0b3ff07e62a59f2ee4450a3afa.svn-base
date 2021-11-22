<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="字典分类" v-if="indexOfs('zdfl')">
      <a-select v-model="form.zdfl" placeholder="选择类别" allowClear @change="selectCategory">
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="字典名称" v-if="indexOfs('zdmc')">
      <a-input v-model="form.zdmc" allowClear />
    </a-form-model-item>
    <a-form-model-item label="医嘱关键字" v-if="indexOfs('yzgjz')">
      <a-input v-model="form.yzgjz" allowClear />
    </a-form-model-item>
    <a-form-model-item label="医嘱类别" v-if="indexOfs('yzlb')">
      <a-input v-model="form.yzlb" allowClear />
    </a-form-model-item>
    <a-form-model-item label="医嘱途径" v-if="indexOfs('yztj')">
      <a-input v-model="form.yztj" allowClear />
    </a-form-model-item>
    <a-form-model-item label="医嘱频次" v-if="indexOfs('yzpc')">
      <a-input v-model="form.yzpc" allowClear />
    </a-form-model-item>
    <a-form-model-item label="本组床号" v-if="indexOfs('bzch')">
      <a-select v-model="form.bzch" placeholder="选择类别" allowClear >
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="医嘱属性" v-if="indexOfs('yzsx')">
      <a-select v-model="form.yzsx" placeholder="选择类别" allowClear>
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="关键字" v-if="indexOfs('gjz')">
      <a-input v-model="form.gjz" allowClear />
    </a-form-model-item>
     <a-form-model-item label="TABLE" v-if="indexOfs('table')">
      <a-input v-model="form.table" allowClear />
    </a-form-model-item>
    <a-form-model-item label="病人标识字段" v-if="indexOfs('brbszd')">
      <a-input v-model="form.brbszd" allowClear />
    </a-form-model-item>
    <a-form-model-item label="ORDER BY" v-if="indexOfs('orderby')">
      <a-input v-model="form.orderby" allowClear />
    </a-form-model-item>
    <a-form-model-item label="WHERE" v-if="indexOfs('where')">
      <a-input v-model="form.where" allowClear />
    </a-form-model-item>
    <a-form-model-item label="特殊标记" v-if="indexOfs('tsbj')">
      <a-select v-model="form.tsbj" placeholder="选择类别" allowClear >
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="输出类型" v-if="indexOfs('sclx')">
      <a-select v-model="form.sclx" placeholder="选择类别" allowClear >
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="2小时医嘱颜色" v-if="indexOfs('zhyzys')">
      <a-input v-model="form.zhyzys" allowClear />
    </a-form-model-item>
    <a-form-model-item label="字典说明">
      <a-input v-model="form.zdsm" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="停用" v-if="indexOfs('ty')">
      <a-select v-model="form.ty" placeholder="选择类别" allowClear >
        <a-select-option
          v-for="item of classificationofdictionary"
          :key="item.value"
          :value="item.value"
          >{{ item.label }}</a-select-option
        >
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="序号" v-if="indexOfs('xh')">
      <a-input v-model="form.xh" allowClear />
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      isShowList: ["zdfl", "zdmc","yzgjz","yzlb","yztj","yzpc","yzsx","sclx","zhyzys","zdsm","ty","xh"],
      classificationofdictionary: [
        //分类字典
        { value: "", label: "请选择" },
        { value: "1", label: "医嘱数据" },
        { value: "2", label: "系统定义" },
        { value: "3", label: "排班信息" },
        { value: "4", label: "病区录入" },
        { value: "5", label: "护理表单" },
        { value: "6", label: "医嘱分组" }
      ],
      form: {
        id:"",
        zdfl: "",
        zdmc: "",
        yzgjz: "", 
        yzlb: "", 
        yzpc: "", 
        yzsx: "", 
        sclx: "", 
        zhyzys: "", 
        zdsm: "", 
        ty: "", 
        xh: "", 
        gjz: "", 
        table: "", 
        brbszd: "", 
        orderby: "", 
        where: "", 
        tsbj: "", 
        where: "", 
        bzch: ""
      }
    };
  },
  props:{
    editRowId:String
  },
  methods: {
    onSubmit() {
      this.$message.success(JSON.stringify(this.form));
      console.log("submit!", this.form);
    },
    selectCategory(value, option){
      console.log(value, option)
      this.isShowList.length=0;
      switch(value){
        case '' || undefined:
          this.isShowList=["zdfl", "zdmc","yzgjz","yzlb","yztj","yzpc","yzsx","sclx","zhyzys","zdsm","ty","xh"];
        break;
        case '1':
          this.isShowList=["zdfl", "zdmc","yzgjz","yzlb","yztj","yzpc","yzsx","sclx","zhyzys","zdsm","ty","xh"];
        break;
        case '2':
          this.isShowList=["zdfl", "zdmc","gjz","sclx","zdsm","ty","xh"];
        break;
        case '3':
          this.isShowList=["zdfl", "zdmc","gjz","sclx","zdsm","ty","xh"];
        break;
        case '4':
          this.isShowList=["zdfl", "zdmc","sclx","zdsm","ty","xh"];
        break;
        case '5':
          this.isShowList=["zdfl", "zdmc","table","brbszd","orderby","where","tsbj","sclx","zdsm","ty","xh"];
        break;
        case '6':
          this.isShowList=["zdfl", "zdmc","yzgjz","yzlb","yztj","bzch","yzsx","sclx","zdsm","ty","xh"];
        break;
      }
    }
  },
  computed: {
    indexOfs() {
      return function(msg) {
       return this.isShowList.indexOf("" + msg + "") != -1 ? true : false;
      };
    }
  },
  watch:{
    editRowId(n,t){
      this.form.id=n;
    }
  }
};
</script>
