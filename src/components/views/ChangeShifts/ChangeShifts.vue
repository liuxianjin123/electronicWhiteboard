<template>
  <div style="height: 100%">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="ChangeShifts">
        <a-icon type="apartment" />人员分组
      </a-menu-item>
      <a-menu-item key="ShiftSetting">
        <router-link to="/ShiftSetting"
          ><a-icon type="usergroup-delete" />交接班设置</router-link
        >
      </a-menu-item>
    </a-menu>
    <div class="container">
      <div style="height: 45px">
        <a-button @click="showModal"><a-icon type="snippets" />新增</a-button>
        <div class="button_right">
          <a-button type="primary"> 从PDA导入</a-button>
          <a-button type="primary"> 从排班导入 </a-button>
        </div>
      </div>

      <div
        class="card_cont"
        style="overflow: auto; height: 100%; padding-bottom: 5%"
      >
        <card ref="adduser"></card>
      </div>
    </div>

    <a-modal
      style="edit_kuang"
      v-model="visible"
      width="60%"
      cancelText="取消"
      okText="确定"
      title="新建分组"
      @ok="handleOk"
    >
      <edit :dataList="groups" ref="edit"></edit>
    </a-modal>
  </div>
</template>
<script>
import card from "../../views/ChangeShifts/ChangeShifts_card";
import edit from "../../views/ChangeShifts/ChangeShifts_card_edit";
import { post, get } from "../../../request/request";
export default {
  name: "ChangeShifts",
  data() {
    return {
      current: ["ChangeShifts"],
      visible: false,
      GetGroupsCard: [],
      groups: [], //空数据
    };
  },
  components: {
    card,
    edit,
  },
  mounted() {},
  methods: {
    showModal() {
      //弹出新建
      this.groups = this.$refs.adduser.newlybuild[0];
      this.visible = true;
    },
    async handleOk(e) {
      //新建确定方法
      if (this.$refs.edit.group_name.length > 1) {
        await this.$refs.edit.EditSave();
        await this.$refs.adduser.arrcard();
        this.visible = false;
      } else {
        this.$message.warning("请填写完整信息");
      }
      this.visible = false;
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
  height: calc(100% - 49px);
}
.button_right {
  float: right;
}
.card_cont >>> .ant-row {
  margin: 0 !important;
}
</style>
