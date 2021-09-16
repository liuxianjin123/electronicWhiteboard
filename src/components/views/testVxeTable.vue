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
    <section style="height: calc(100% - 50px)">
      <vxe-grid
        border
        resizable
        keep-source
        ref="xGrid"
        id="toolbar_demo_1"
        height="500"
        :print-config="{}"
        :import-config="{}"
        :export-config="{}"
        :columns="tableColumn"
        :data="tableData"
        :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
      >
      </vxe-grid>
    </section>
  </div>
</template>
<script>
str=[]
for(var i=0; i<200; i++){
  str.push({
          date: "2020-02-02 12:55",
          tw: "36.5",
          xl: 60,
          mb: 30,
          hx: 50,
          ssy: 125,
          szy: 95,
          spo2: 12,
          wljw: "是",
          xyll: "6.3",
          xyfs: "鼻导管吸氧",
          ys: "清醒",
          tkzdx: "2.3",
          tkzgfy: "强",
          tkydx: "66",
          tkygfy: "弱",
          sffs: "是",
          gd: "尿管,胃管",
          bqgc: "病人",
          hsqm: "张一山" 
        })
}
export default {
  data() {
    return {
      str,
      tableData: [],
      tableColumn: [
        { type: "checkbox", width: 40},
          {
            field: "date",
            title: "时间",
            sortable: true,
            width: 150,
            editRender: { name: "input" },
          },
          {
            field: "tw",
            title: "体温",
            sortable: true,
            width: 90,
            editRender: { name: "input" },
          },
          {
            field: "mb",
            title: "脉搏",
            sortable: true,
            width: 90,
            editRender: { name: "input" },
          },
          {
            field: "hx",
            title: "呼吸",
            sortable: true,
            width: 90,
            editRender: { name: "input" },
          },
          {
            title: "血压",
            children: [
              {
                field: "ssy",
                title: "收缩压",
                width: 90,
                editRender: { name: "input" },
              },
              {
                field: "szy",
                title: "舒张压",
                width: 90,
                editRender: { name: "input" },
              },
            ],
          },
          {
            field: "spo2",
            title: "SPO2",
            sortable: true,
            width: 120,
            editRender: { name: "input" },
          },
          {
            field: "wljw",
            title: "物理降温",
            sortable: true,
            width: 120,
            editRender: { name: "input" },
          },
          {
            title: "吸氧",
            children: [
              {
                field: "xyll",
                title: "流量(L/min)",
                width: 120,
                editRender: { name: "input" },
              },
              {
                field: "xyfs",
                title: "方式",
                width: 120,
                editRender: { name: "input" },
              },
            ],
          },
          {
            field: "ys",
            title: "意识",
            sortable: true,
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
                    field: "tkzdx",
                    title: "大小(mm)",
                    sortable: true,
                    width: 150,
                    editRender: { name: "input" },
                  },
                   {
                    field: "tkzgfy",
                    title: "光反应",
                    sortable: true,
                    width: 120,
                    editRender: { name: "input" },
                  }
                ],
              },
              {
                title: "右",
                children: [
                  {
                    field: "tkydx",
                    title: "大小(mm)",
                    sortable: true,
                    width: 150,
                    editRender: { name: "input" },
                  },
                   {
                    field: "tkygfy",
                    title: "光反应",
                    sortable: true,
                    width: 120,
                    editRender: { name: "input" },
                  }
                ],
              }
            ],
          },
          {
            field: "sffs",
            title: "是否翻身",
            sortable: true,
            width: 120,
            editRender: { name: "input" },
          },
          {
            field: "gd",
            title: "管道",
            sortable: true,
            width: 120,
            editRender: {name: '$select', options: []} ,
          },
          {
            field: "bqgc",
            title: "病情观察",
            sortable: true,
            width: 520,
            editRender: { name: "input" },
          },
          {
            field: "hsqm",
            title: "护士签名",
            width: 120,
          },
      ],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.tableData = this.str
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.brzd {
  display: inline-block;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  padding: 0 20px;
}
</style>
