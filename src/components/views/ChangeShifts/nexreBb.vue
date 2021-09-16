<template>
  <div class="box">
    <header>接班</header>
    <section></section>
  </div>
</template>
<script>
export default {
  name: "nexreBb",
  data() {
    return {
      visible: false,
      title1: "白班",
      title2: "夜班",
    };
  },
};
</script>
<style scoped>
.box {
  background: #fff;
  height: 100%;
  border-radius: 5px;
  padding: 10px;
}
.box header,
.box section {
  align-self: start;
}
.ant-tabs-tab > span {
  font-size: 15px;
  font-weight: bold;
}
</style>
