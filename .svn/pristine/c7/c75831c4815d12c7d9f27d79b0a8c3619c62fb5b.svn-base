<template>
  <div class="container">
    <header>
      <label>护理记录单</label>
      <label>姓名：廖春菊</label>
      <label>床位：0008</label>
      <label>年龄：39岁</label>
      <label>住院号：900652336</label>
      <label>性别：女</label>
      <a-tooltip placement="top">
        <template slot="title">
          <span
            >诊断：急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎</span
          >
        </template>
        <label class="brzd"
          >诊断：急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎急性胆囊炎</label
        >
      </a-tooltip>
    </header>
    <section ref="sections">
      <a-table
        :columns="columns"
        :data-source="data"
        size='small'
        :rowKey="record => record.key"
        bordered
        :customRow="rowClick"
        :pagination="false"
        :scroll="{ x: '100%', y: 'calc(100vh - '+tableBodyHeight+'px)' }"
        :defaultExpandAllRows="false"
        :expandRowByClick="true" 
        :expandedRowKeys="curExpandedRowKeys"
      >
        <div slot="expandedRowRender" slot-scope="record" style="margin: 0">
         <a-form :form="form" >
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item label="record.tw">
              <a-input
                v-model="record.tw"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit">
                Submit
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-table>
    </section>
    <a-menu class="menustyle" :style="menuStyle" v-if="menuVisible">
      <a-menu-item>
        <a @click="lookBuilding(recordRow)">查看</a>
      </a-menu-item>
      <a-menu-item>
        <a @click="BuildingDelete(recordRow)" class="red">删除</a>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
const columns = [
  {
    title: "时间日期",
    dataIndex: "date",
    key: "date",
    width: 120
  },
  {
    title: "体温",
    dataIndex: "tw",
    key: "tw",
    width: 100,
  },
  {
    title: "心率",
    dataIndex: "xl",
    key: "xl",
    width: 80,
  },
  {
    title: "脉搏",
    dataIndex: "mb",
    key: "mb",
    width: 80,
  },
  {
    title: "呼吸",
    dataIndex: "hx",
    key: "hx",
    width: 80,
  },
  {
    title: "血压",
    children: [
      {
        title: "收缩压",
        dataIndex: "ssy",
        key: "ssy",
        width: 80,
      },
      {
        title: "舒张压",
        dataIndex: "szy",
        key: "szy",
        width: 80,
      },
    ],
  },
  {
    title: "spo2",
    dataIndex: "spo2",
    key: "spo2",
    width: 80,
  },
  {
    title: "吸氧",
    children: [
      {
        title: "吸氧流量",
        dataIndex: "xyll",
        key: "xyll",
        width: 120,
      },
      {
        title: "吸氧方式",
        dataIndex: "xyfs",
        key: "xyfs",
        width: 120,
      },
    ],
  },
  {
    title: "意识",
    dataIndex: "ys",
    key: "ys",
    width: 70,
  },
  {
    title: "瞳孔",
    children: [
      {
        title: "左",
        children: [
          {
            title: "大小(mm)",
            dataIndex: "tkzdx",
            key: "tkzdx",
            width: 120,
          },
          {
            title: "光反应",
            dataIndex: "tkzgfy",
            key: "tkzgfy",
            width: 80,
          },
        ],
      },
      {
        title: "右",
        children: [
          {
            title: "大小(mm)",
            dataIndex: "tkydx",
            key: "tkydx",
            width: 120,
          },
          {
            title: "光反应",
            dataIndex: "tkygfy",
            key: "tkygfy",
            width: 80,
          },
        ],
      },
    ],
  },
  {
    title: "是否翻身",
    dataIndex: "sffs",
    key: "sffs",
    width: 120,
  },
  {
    title: "管道",
    dataIndex: "gd",
    key: "gd",
    width: 120,
    type:'input'
  },
  {
    title: "病情观察",
    dataIndex: "bqgc",
    key: "bqgc",
    width: 250,
  },
  {
    title: "护士签名",
    dataIndex: "hsqm",
    key: "hsqm",
    width: 120,
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: "2020-20-20 12:15",
    tw: "36.5℃",
    xl: "60",
    mb: "90",
    hx: "23" + i,
    ssy: "125",
    szy: "98",
    spo2: "36.3",
    wlje: "冰敷",
    xyll: "35",
    xyfs: "气管插管",
    ys: "暴躁老哥",
    tkzdx: "3.5",
    tkzgfy: "灵敏",
    tkydx: "3.4",
    tkygfy: "迟钝",
    sffs: i % 2 == 0 ? "是" : "否",
    gd: "胸腔引流管",
    bqgc: "病人随地大小便，已经被我当场处决",
    hsqm: "刘先近",
  });
}

export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      form:[

      ],
      data,
      columns,
      rowData: [
        "date",
        "tw",
        "xl",
        "mb",
        "hx",
        "ssy",
        "szy",
        "spo2",
        "wlje",
        "xyll",
        "xyfs",
        "ys",
        "tkzdx",
        "tkzgfy",
        "tkydx",
        "tkygfy",
        "sffs",
        "gd",
        "bqgc",
        "hsqm",
      ],
      rowName: "",
      rowIndex: "",
      curExpandedRowKeys: [],
      tableBodyHeight:167,
      menuVisible: false,
      menuStyle: {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        borderRadius: "5px",
        border: "1px solid #eee"
      },
      recordRow: [],
    };
  },
  methods: {
    //取消右键菜单
    cancelClick() {
      this.menuVisible = false;
      document.body.removeEventListener("click", this.cancelClick);
    },
    rowClick(record,index){
      return {
        on: {
          click: () => {
            this.foldRow(index);
            this.cancelClick;
          },
          contextmenu: e => {
            e.preventDefault();
            this.menuVisible = true;
            this.recordRow = record;
            console.log(record)
            this.menuStyle.top = e.clientY + "px";
            this.menuStyle.left = e.clientX + "px";
            document.addEventListener("click", this.cancelClick);
          }
        },
      };
    },
    foldRow(rowkey) {
      // 只允许当行展开逻辑
      if (this.curExpandedRowKeys.length > 0) {
        let index = this.curExpandedRowKeys.indexOf(rowkey);
        if (index > -1) {
          this.curExpandedRowKeys.splice(index, 1);
        } else {
          this.curExpandedRowKeys.splice(0, this.curExpandedRowKeys.length);
          this.curExpandedRowKeys.push(rowkey);
        }
      } else {
        this.curExpandedRowKeys.push(rowkey);
      }
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.container header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  padding: 0 20px;
}
.container section {
  height: calc(100% - 50px);
}
.brzd {
  display: inline-block;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container section >>> .ant-table-tbody > tr > td {
  padding: 0 5px !important;
  overflow-wrap: break-word;
  height: 40px;
}
.container section >>> .ant-table-thead > tr > th {
  background: #fafafa !important;
}
.container section >>> .ant-table-small > .ant-table-content .ant-table-header {
  background-color: #fafafa;
}
</style>