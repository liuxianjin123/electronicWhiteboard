<template>
  <div class="container">
    <div class="box">
      <header>
        <template>
          <a-tabs default-active-key="1" @change="callback">
            <a-tab-pane key="1" :disabled="$store.state.createJbsj">
              <span slot="tab">
                <a-icon type="file-protect" style="font-size: 20px" />
                交班({{ title1 }})
              </span>
            </a-tab-pane>
            <a-tab-pane key="2" :disabled="$store.state.createJbsj">
              <span slot="tab" >
                <a-icon type="usergroup-delete" style="font-size: 20px" />
                接班({{ title2 }})
              </span>
            </a-tab-pane>
          </a-tabs>
          <div class="btnGroup">
            <a-button
              type="primary"
              ghost
              icon="appstore"
              size="large"
              :disabled="$store.state.createJbsj"
              @click="showAll"
            >
              {{$store.state.dataType == 0 ? "显示本人" : "显示全部" }}
            </a-button>
            <a-button 
              type="primary" 
              size="large" 
              :disabled="$store.state.createJbsj"
              spin 
              @click="updateGroupData">
                <a-icon
                  type="sync"
                  :spin="$store.state.updateGroupData"
                />更新数据
            </a-button>
            <a-button type="primary" size="large" @click="updateCreateJbsj">
              <a-icon :type="!$store.state.createJbsj?'cloud-sync':'smile'" />
              {{$store.state.createJbsj?"生成完毕":"生成交班数据"}}
            </a-button>
          </div>
        </template>
      </header>
      <section>
        <router-view> </router-view>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "feelUnhappy",
  data() {
    return {
      visible: false,
      title1: "白班",
      title2: "夜班",
    };
  },
  methods: {
    callback(key) {
      key == 1
        ? this.$store.commit("updateisjj", true)
        : this.$store.commit("updateisjj", false);
    },
    showAll() {
      this.$store.commit("updateDataType");
    },
    updateGroupData() {
      this.$store.commit("updateGroupData", true);
    },
    updateCreateJbsj() {
      this.$store.commit("updateCreateJbsj");
    },
  },
  created() {
    this.$router.push({ path: "/nexreJb" });
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  background: #f2f2f2;
  padding: 10px;
  box-sizing: border-box;
}
.box {
  height: 100%;
}
.box section {
  height: calc(100% - 72px);
}
.ant-tabs-tab > span {
  font-size: 15px;
  font-weight: bold;
}
.box header {
  position: relative;
  background: #fff;
  padding: 10px;
  padding-bottom: 0;
  box-sizing: border-box;
  border-radius: 7px 7px 0 0;
}
.box header .btnGroup {
  position: absolute;
  right: 8px;
  top: 7px;
}
</style>
