<template>
  <div>
    <search
      @selectFunc="selectFunc"
      :searchList="searchList"
      :selectValue="selectValue"
    ></search>
  </div>
</template>

<script type="text/ecmascript-6">
import Search from "../customMoudle/customSelect";
export default {
  data() {
    return {
      searchList: ["草船借箭", "大富翁", "测试数据"],
      // 直接通过props传递对象 修改，挺便捷的,但是不规范
      selectValue: {
        data: "1"
      },
      // 通过emit修改，规范写法
      selectValue2: ""
    };
  },
  mounted() {},
  methods: {
    selectFunc(value) {
      this.selectValue2 = value;
      this.$message.info(value);
    }
  },
  components: {
    Search
  }
};
</script>
