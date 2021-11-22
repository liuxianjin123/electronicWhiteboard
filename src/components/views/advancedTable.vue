<template>
  <div class="container">
    <a-spin :spinning="loadTable" size="large">
      <section style="height: 100%">
        <div class="table-container" style="height: 100%">
          <vxe-grid
            v-bind="gridOptions"
            @edit-disabled="editDisabledEvent"
            @cell-click="cellClickEvent"
            @scroll="scrollEvent"
            @menu-click="contextMenuClickEvent"
            @cell-menu="cellContextMenuEvent"
          >
          </vxe-grid>
        </div>
      </section>
    </a-spin>
    <vxe-modal v-model="showModel" title="选择管道" width="600" height="400">
      <template #default>
        <vxe-form :data="formData3" title-align="right" title-width="100">
          <vxe-form-item field="age" span="24" :item-render="{}">
            <vxe-input
              v-model="serchG"
              type="text"
              placeholder="通过关键字检索选项"
              clearable
            ></vxe-input>
          </vxe-form-item>
          <vxe-form-item field="gdlx" span="24" :item-render="{}">
            <template>
              <vxe-checkbox-group v-model="formData3.gdlx">
                <template v-if="sexList != null">
                  <vxe-checkbox
                    v-for="(item, index) in sexList"
                    :key="index"
                    :label="item.label"
                    >{{ item.value }}</vxe-checkbox
                  >
                </template>
              </vxe-checkbox-group>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" span="24"></vxe-form-item>
          <vxe-form-item align="center" span="24">
            <vxe-button
              status="success"
              @click="enterToLogin"
              content="确 定"
            ></vxe-button>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadTable: true, //加载中的load
      showModel: false, //控制管道等类型弹窗的显示隐藏
      czy: null, //暂存操作员信息
      brxx: null, //暂存病人信息
      zyh: null, //用于接受记录传入的住院号
      formData3: {
        //控制管道等类型弹窗的选中的数据
        gdlx: [], //弹窗选项的项目
      },
      serchG: "6666", //用于检索过多的弹窗选项
      editRow: null, //用于记录当前弹窗调用行数(具体是哪行调用了弹窗选项)
      sexList: [
        //弹窗字典，根据点击的项目动态设置对应项目
        { label: "尿管", value: "尿管" },
        { label: "胃管", value: "胃管" },
        { label: "胸腔引流管", value: "胸腔引流管" },
        { label: "腹腔引流管", value: "腹腔引流管" },
        { label: "cvc", value: "cvc" },
        { label: "T管", value: "T管" },
        { label: "PICC", value: "PICC" },
        { label: "保留胃管", value: "保留胃管" },
        { label: "气管插管", value: "气管插管" },
      ],
      gridOptions: {
        //整个数据表格的配置集合
        ref: "xTable", //表格的名字(类似于ID，后面操作表格的数据都需要它来当做找到表格的索引)
        border: true, //表格显示边框
        align: "center", //所有内容居中显示
        size: "mini", //表格的规格
        resizable: true, //所有的列是否允许拖动列宽调整大小
        keepSource: true, //保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等（开启后影响性能，具体取决于数据量）
        round: true, //	是否为圆角边框
        highlightCurrentRow: true, //是否要高亮当前行
        highlightCurrentColumn: true, //是否要高亮当前列
        showOverflow: true, //没用，设置虚拟滚动之后此属性失效
        autorResize: true, //	自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
        id: "toolbar_demo_1", //表格ID
        height: "auto", //auto则表示自动撑满父元素
        editConfig: {
          //可编辑配置项
          trigger: "click", //触发方式：点击
          mode: "row", //row（行编辑模式）
          showIcon: false, //是否显示列头编辑图标
          showStatus: true, //只对 keep-source 开启有效，是否显示单元格新增与修改状态(新增&修改每个单元格会有标志)
          activeMethod: this.activeRowMethod, //该方法的返回值用来决定该单元格是否允许编辑(比如说点击此行数据，会首先判断填写人和当前操作员ID是否一致，由此判断权限)
        },
        formConfig: {
          //顶部的操作表单
          titleWidth: 100, //提示项titie宽度
          items: [
            //form各项成员
            { field: "", title: "护理记录单", span: 2 },
            { field: "", title: "姓名：廖春菊", span: 2 },
            { field: "", title: "床位：0008", span: 2 },
            {
              field: "jlsj",
              title: "录入时间",
              span: 6,
              itemRender: {
                name: "$input",
                props: { placeholder: "请选择时间" },
              },
            },
            {
              span: 12,
              align: "right",
              collapseNode: true,
              itemRender: {
                name: "$buttons",
                children: [
                  {
                    props: {
                      type: "button",
                      content: "查 询",
                      status: "primary",
                    },
                  },
                  {
                    props: {
                      type: "button",
                      content: "保 存",
                      status: "primary",
                    },
                    events: { click: this.saveEvent },
                  }, //保存按钮
                  {
                    props: {
                      type: "button",
                      content: "打 印",
                      status: "success",
                    },
                    events: { click: this.printTable },
                  }, //打印
                ],
              },
            },
          ],
        },
        keyboardConfig: {
          //按键配置项
          isArrow: true, //开启方向键功能
          isDel: true, //开启删除键功能
          isEnter: true, //开启回车键功能
          isTab: true, //开启 Tab 键功能
          isEdit: true, //开启任意键进入编辑（功能键除外）
          enterToTab: true, //是否将回车键行为改成 Tab 键行为
        },
        menuConfig: {
          //快捷菜单配置项
          enabled: true, //是否启用
          header: {
            disabled: true, //表头禁止右键菜单
          },
          body: {
            disabled: false,
            options: [
              //表格中间区域的右键菜单
              [
                { code: "insertAt", name: "新增", disabled: false }, //disabled：是否禁用
                { code: "remove", name: "删除", disabled: this.delSp },
                { code: "copy", name: "复制", disabled: false },
                { code: "sp", name: "审批", disabled: this.delSp },
              ],
            ],
          },
        },
        columns: [
          //表头组成的JSON
          {
            field: "jlsj", //对应的字段名
            title: "时间", //界面显示的文字
            sortable: true, //是否支持排序
            width: 150, //列宽
            minWidth: 120, //最大列宽
            fixed: "left", //固定列：left,right
            editRender: {
              //可编辑控件
              name: "$input", //控件类型
              props: { type: "datetime", placeholder: "请选择日期" },
            },
          },
          {
            field: "tw",
            title: "体温",
            minWidth: 60,
            editRender: {
              name: "$input",
              props: { type: "number" },
            },
          },
          {
            field: "mb",
            title: "脉搏",
            width: 60,
            editRender: { name: "$input", props: { type: "number" } },
          },
          {
            field: "hx",
            title: "呼吸",
            width: 60,
            editRender: { name: "$input", props: { type: "number" } },
          },
          {
            title: "血压",
            children: [
              {
                field: "ssy",
                title: "收缩压",
                width: 60,
                editRender: { name: "input", props: { type: "number" } },
              },
              {
                field: "szy",
                title: "舒张压",
                width: 60,
                editRender: { name: "input", props: { type: "number" } },
              },
            ],
          },
          {
            field: "ybhd",
            title: "SPO2",
            width: 60,
            editRender: { name: "input", props: { type: "number" } },
          },
          {
            field: "wljw",
            title: "物理降温",
            width: 120,
            editRender: { name: "input" },
          },
          {
            title: "吸氧",
            children: [
              {
                field: "xy",
                title: "流量(L/min)",
                width: 90,
                editRender: { name: "input", props: { type: "number" } },
              },
              {
                field: "xyfs",
                title: "方式",
                width: 120,
                editRender: { name: "$input" },
              },
            ],
          },
          {
            field: "ys",
            title: "意识",
            width: 90,
            editRender: { name: "input" },
          },
          {
            title: "瞳孔",
            children: [
              {
                title: "左",
                children: [
                  {
                    field: "tkz",
                    title: "大小(mm)",
                    width: 70,
                    editRender: { name: "input", props: { type: "number" } },
                  },
                  {
                    field: "dgfsz",
                    title: "光反应",
                    width: 90,
                    editRender: { name: "input" },
                  },
                ],
              },
              {
                title: "右",
                children: [
                  {
                    field: "tky",
                    title: "大小(mm)",
                    width: 70,
                    editRender: { name: "input", props: { type: "number" } },
                  },
                  {
                    field: "dgfsy",
                    title: "光反应",
                    width: 90,
                    editRender: { name: "input" },
                  },
                ],
              },
            ],
          },
          {
            field: "fs",
            title: "是否翻身",
            width: 90,
            editRender: { name: "$input" },
          },
          {
            title: "管道",
            children: [
              {
                field: "gdlx",
                title: "管道类型",
                width: 120,
                editRender: {
                  name: "$input",
                  events: { focus: this.roleChangeEvent },
                },
              },
              {
                field: "gdlx_qt",
                title: "管道其他",
                width: 220,
                editRender: { name: "input" },
              },
            ],
          },
          {
            field: "bqgc",
            title: "病情观察",
            width: 520,
            editRender: {
              name: "textarea",
            },
          },
          {
            field: "cUserName",
            title: "护士签名",
            width: 80,
          },
        ],
        data: [],
      },
    };
  },
  methods: {
    printTable() {
      //打印
      this.$XModal.message({ content: "打印", status: "warning" });
    },
    enterToLogin() {
      //模态框点击确定之后为触发的单元格赋值
      this.showModel = false; //隐藏模态框
      this.editRow.gdlx = this.formData3.gdlx.toString(); //被编辑行的单元格赋值
    },
    async saveEvent() {
      //保存数据
      const $table = this.$refs.xTable; //获取到当前表格
      const { insertRecords, removeRecords, updateRecords } =
        $table.getRecordset(); //表格：新增，删除，更新的数据
      let datas = [];
      if (insertRecords.length != 0) {
        //获取到新增的数据
        for (let i in insertRecords) {
          delete insertRecords[i]["_XID"];
          datas.push({
            TableName: "hl_tab_lchljld",
            PrimaryVal: insertRecords[i].id,
            PrimaryName: "id",
            Hashtable: insertRecords[i],
            userCode: this.czy.userId,
          });
        }
      }
      if (updateRecords.length != 0) {
        //获取到更新的数据
        for (let i in updateRecords) {
          delete updateRecords[i]["_XID"];
          datas.push({
            TableName: "hl_tab_lchljld",
            PrimaryVal: updateRecords[i].id,
            PrimaryName: "id",
            Hashtable: updateRecords[i],
            userCode: this.czy.userId,
          });
        }
      }
      if (datas.length != 0) {
        this.loadTable = true; //圈圈转起来
        const res = await this.$axios.post(
          "/Api/FormHandler.ashx/SaveFormData",
          datas
        );
        if (res.code == "0" && res.result.isSuccess) {
          this.loadTable = false;
          this.$XModal.message({
            content: res.result.msg,
            status: res.result.isSuccess ? "success" : "warning",
          });
        }
      } else {
        //啥数据都没抓取到就表示还没操作表格
        this.$XModal.message({
          content: "未添加或修改数据",
          status: "warning",
        });
      }
    },
    contextMenuClickEvent({ menu, row, column, columnIndex }) {
      //右键菜单方法集合
      switch (menu.code) {
        case "copy": //复制
          this.insertEvent(row);
          break;
        case "insertAt": //新增
          this.insertEvent(null);
          break;
        case "remove": //删除
          this.delRow(row);
          break;
        case "sp": //审批
          this.$XModal.message("审批");
          break;
      }
    },
    async delRow(row) {
      //删除当前行数据
      const $table = this.$refs.xTable;
      let params = {
        userCode: this.czy.userId, //删除操作员工号
        userName: this.czy.userName, //操作员姓名
        id: row.id, //删除行数据ID
        idFieldName: "id", //根据哪一个字段来当做条件删除
        zyh: row.zyh, //行数据病人的住院号
        tableName: "hl_tab_lchljld", //数据所在表
      };
      if (row.id == "") {
        //行数据ID字段是空的说明这行数据是用户新增的还没保存的数据，所以直接删除就是
        $table.remove(row);
        this.$XModal.message({ content: "删除成功！", status: "success" });
      } else {
        //否则就是调接口删除库里的数据
        const res = await get("/Api/FormHandler.ashx/DeleteFormData", params);
        if (res.code == "0" && res.result.isSuccess) {
          $table.remove(row);
          this.$XModal.message({
            content: res.result.msg,
            status: res.result.isSuccess ? "success" : "warning",
          });
        }
      }
    },
    roleChangeEvent({ row }) {
      //弹窗选择事件
      this.editRow = row; //记录点击的行
      this.showModel = true; //弹出模态框
    },
    async getBrData() {
      //读取当前病人已有的数据
      const res = await this.$axios.get(
        "/Api/FormHandler.ashx/GetFormDataLists",
        {
          zyh: "1083202106116367", //病人住院号
          zyhFieldName: "zyh", //住院号在表的中的具体名字：可能是zyh||pati_zyh
          tableName: "hl_tab_lchljld", //读取数据表来源
          orderByField: "jlsj", //根据那个字段排序
          orderByType: "desc", //排序的方式：desc||asc
        }
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          let tableData = null;
          if (res.code == 0 && res.result) {
            this.loadTable = false;
            tableData = res.result; //给表格绑定的数据源赋值
          }
          // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿
          if (this.$refs.xTable) {
            this.gridOptions.data = tableData; //给表格绑定的数据源赋值
          }
          resolve();
        }, 100);
      });
      this.loadTable = false;
      mockList(1);
    },
    mockList(size) {
      //当这个病人一行数据都没得的时候就曾一行数据给他，方便右键
      const list = [];
      for (let index = 0; index < size; index++) {
        list.push({
          id: null,
          bqdm: null,
          bqgc: null,
          bqmc: null,
          brch: "",
          brnl: "",
          brxb: "",
          brxm: "",
          brzd: "",
          cDate: this.GetDateTime(),
          cUser: null,
          cUserName: null,
          cgszdyyy: null,
          db: null,
          ddpf: null,
          dgfsy: "",
          dgfsz: "",
          fs: null,
          gcspf: null,
          gcsselect: null,
          gdhl: null,
          gdlx: "",
          gdlx_qt: null,
          gdlxqt: null,
          gdtc: null,
          gdwlcd: null,
          gdzrcd: null,
          gdzw: null,
          glmc: null,
          glwxcd: null,
          gonggao: null,
          gz: null,
          hlcs: null,
          hlzd: null,
          hx: null,
          id: null,
          jlsj: this.GetDateTime(),
          jmszdyw: null,
          kfswyljbwg: null,
          ksdm: null,
          ksmc: null,
          mDate: null,
          mUser: null,
          mUserName: null,
          mb: null,
          nrsqd: null,
          ny: null,
          otw: null,
          pb: null,
          pfqk: null,
          prints: false,
          qiwei: null,
          sffs: null,
          smsc: null,
          ssy: null,
          sx: null,
          sy: null,
          szy: null,
          tky: null,
          tkz: null,
          tmh: null,
          ttbw: null,
          ttpf: null,
          ttxz: null,
          tw: null,
          wljw: null,
          ww: null,
          wxpf: null,
          xdjh: null,
          xiyang: null,
          xl: "",
          xt: null,
          xueyang: null,
          xy: null,
          xyfs: null,
          yanse: null,
          yatong: null,
          ybhd: null,
          ycpf: null,
          ylw: null,
          ys: null,
          ywffy: null,
          zhidi: null,
          zlnlpf: null,
          zmynd: null,
          zyh: "",
        });
      }
      return list;
    },
    insertEvent(row, columnIndex) {
      //新增或复制数据
      let xTable = this.$refs.xTable;
      let record = null;
      if (row != null) {
        //暂时卵的，因为表格实例中唯一id复制重复了，编辑时候出现问题！
        row.id = "";
        row.cUserName = this.czy.userName;
        row.cUser = this.czy.userId;
        record = row;
      } else {
        record = {
          //新增数据，常用的字段必须加上才行
          id: "",
          jlsj: this.GetDateTime(),
          cDate: this.GetDateTime(),
          ksmc: this.czy.departmentCode,
          bqmc: this.czy.departmentName,
          bqdm: this.czy.departmentId,
          ksdm: this.czy.departmentCode,
          cUserName: this.czy.userName,
          cUser: this.czy.userId,
          zyh: this.brxx.zyh,
          tmh: this.brxx.tmh,
          brxm: this.brxx.xm,
          brxb: this.brxx.xb,
          brnl: this.brxx.nl,
          brch: this.brxx.bch,
          brzd: this.brxx.zd,
        };
      }
      xTable.insert(record, row).then(({ row }) => {
        xTable.setActiveRow(row); //添加数据
      });
      xTable.updateData();
    },
    cellClickEvent({ column, rowIndex, row }) {
      //监听行数据编辑前的点击事件
      localStorage.rowIndex = rowIndex;
      if (row.cUser == this.czy.userId) {
        //判断当前被点击行数据中的创建人员和当前操作员id是否一致。
        console.log(
          "当前用户" +
            this.czy.userId +
            "/" +
            this.czy.userName +
            `编辑了记录时间：${row.jlsj}的${column.title}项目`
        );
      }
    },
    cellContextMenuEvent({ row, rowIndex }) {
      //鼠标右键了哪一行数据就让哪一行添加被选中的样式在这里控制操作按钮的状态
      if (row.cUser != this.czy.userId) {
        //创建人员和当前操作员id一致则可删除&审批，否者禁止，并并用右键相关按钮
        this.gridOptions.menuConfig.body.options[0][1].disabled = true;
        this.gridOptions.menuConfig.body.options[0][3].disabled = true;
      } else {
        this.gridOptions.menuConfig.body.options[0][1].disabled = false;
        this.gridOptions.menuConfig.body.options[0][3].disabled = false;
      }
      const $xTable = this.$refs.xTable;
      $xTable.setCurrentRow(this.gridOptions.data[rowIndex]); //为当前点击行添加背景色，表示选中
    },
    scrollEvent({ scrollTop, scrollLeft }) {
      //监听滚动事件，记录填写数据时滚动的高度，后面刷新表格之后会自动滚动到最后被点击的行的位置
      localStorage.tableScrollTop = scrollTop;
    },
    activeRowMethod({ row }) {
      //判断权限
      console.log(row.cUser);
      if (row.cUser !== this.czy.userId) {
        //判断当前被点击行数据中的创建人员和当前操作员id是否一致，由此判断行事件
        return false;
      }
      return true;
    },
    async editDisabledEvent({ row, column }) {
      //判断当前被点击行数据中的创建人员和当前操作员id是否一致，由此判断行事件
      this.$XModal.message({
        content: "权限不足,只能由填写人本人或者护士长修改或删除当前记录!",
        status: "warning",
      });
    },
    GetDateTime() {
      //获取当前时间
      let d, s;
      d = new Date();
      s = d.getFullYear() + "-"; //取年份
      s =
        s +
        (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
        "-"; //取月份
      s += (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " "; //取日期
      s += (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"; //取小时
      s += d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(); //取分
      return s;
    },
    async czyAndBrxx() {
      //获取操作员和病人的基本信息
      let userData = {
        Account: "0225",
        Password: "1",
      };
      const czy = await post("/Api/FormHandler.ashx/IsLogin", userData);
      const brxx = await get("/Api/FormHandler.ashx/GetPatientInfo", {
        zyh: "1083202106116367",
      });
      this.czy = czy.result;
      this.brxx = brxx.result;
      console.log("病人信息", this.czy, this.brxx);
    },
  },
  created() {
    this.czyAndBrxx();
    this.getBrData();
    setTimeout(() => {
      const $xTable = this.$refs.xTable;
      if ($xTable) {
        $xTable.scrollTo(0, parseInt(localStorage.tableScrollTop));
        $xTable.setCurrentRow(this.gridOptions.data[localStorage.rowIndex]);
      }
    }, 10);
    let query = this.$route.query;
    this.zyh = query.zyh;
    console.log("url接收的zyh：" + this.zyh);
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.xmcw {
  float: left;
  margin: 0 30px;
  line-height: 32px;
}
.xmcw label:last-child {
  margin-left: 20px;
}
/* section >>>.vxe-table--render-default .vxe-body--column.col--ellipsis:not(.col--actived)>.vxe-cell{
  overflow: inherit !important; 
  text-overflow: inherit !important;
  white-space: inherit !important;
  max-height: inherit !important;
} */
section >>> .vxe-table--render-default .vxe-cell {
  white-space: pre-line;
  word-break: break-all;
  padding-left: 4px !important;
  padding-right: 2px !important;
}
section >>> .vxe-buttons--wrapper button {
  float: right;
  margin: 0 10px;
}
section >>> .vxe-buttons--wrapper button:first-child {
  margin-right: 0px;
}
section >>> .vxe-form .vxe-form--item-inner {
  min-height: 36px;
  text-align: center;
}
section >>> .vxe-form--item-trigger-node {
  display: none;
}
.container >>> .ant-spin-nested-loading,
.container >>> .ant-spin-container {
  height: 100%;
}

.container >>> .ant-spin-nested-loading > div > .ant-spin {
  max-height: inherit !important;
}
</style>
