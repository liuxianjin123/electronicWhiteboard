<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="Activity zone">
        <a-select
          v-model="form.region"
          placeholder="please select your zone"
          @change="choseValue"
        >
          <a-select-option
            v-for="item in searchList"
            :key="item"
            :value="item"
            >{{ item }}</a-select-option
          >
        </a-select>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      data: [],
      searchFlag: false,
      searchFous: "0",
      fousFlag: false,
      searchBorder: "none",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        region: undefined,
      },
    };
  },
  props: {
    searchList: Array,
    selectValue: Object,
  },
  mounted() {
    this.data = this.searchList;
  },
  methods: {
    choseValue() {
      this.selectValue.data = this.form.region;
      this.$emit("selectFunc", this.form.region);
    },
  },
  created(){
    console.log(111);
  }
};
</script>
