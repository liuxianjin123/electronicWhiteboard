<template>
  <div class="more_frame">
    <h2 class="h2_name">{{ datatitle }}</h2>
    <div style="width: 100%; overflow: hidden">
      <div class="m_cont">
        <div
          class="team_people"
          style="color: #999"
          v-show="item.isExist"
          v-for="(item, index) in dataList"
          :key="index"
        >
          {{ item.userName }}
          {{ item.bedName }}
        </div>
      </div>
    </div>
    <!-- <a-button type="primary" class="m_ok">确定</a-button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    dataList: {},
    datatitle: {},
  },
  methods: {},
};
</script>
<style>
.team_people,
.bed_number {
  display: inline-block;
  width: 30%;
  text-align: center;
}
.more_frame {
  width: 100%;
  height: 283px;
  position: relative;
  left: -27%;
  z-index: 10;
  top: -103px;
  background-color: #e4f2ff;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.h2_name {
  text-align: center;
}
.h2_name {
  margin-top: 5px;
  color: #999;
}
.m_ok {
  /* float: left; */
  position: absolute;
  left: 40%;
  top: 105%;
}
.m_cont {
  overflow: auto;
  height: 230px;
  width: 95%;
  padding: 0;
  margin-left: 10%;
}
</style>
