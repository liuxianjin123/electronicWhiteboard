<template>
  <div class="container">
    <div class="box">
      <div class="header">
        <span
          ><img
            src="../../../../../static/images/ChangeShifts_now/jjbsz_tb.png"
            alt="人员管理"
            class="header-img"
            title="人员管理"
          />
          人员管理
        </span>
      </div>
      <div class="fgx"></div>
      <div class="button_right">
        <a-button><a-icon type="sync" /> 刷新 </a-button>
        <a-button><a-icon type="snippets" />新增</a-button>
      </div>
      <div class="content">
        <a-table :columns="columns" :data-source="data" bordered>
          <template slot="name" slot-scope="text">
            <a>{{ text }}</a>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 4) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};

const data = [
  {
    key: "1",
    name: "王翠花",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "张铁蛋",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "李狗蛋",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "张三",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "李四",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park",
  },
];
export default {
  data() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        customRender: (text, row, index) => {
          if (index < 4) {
            return <a href="javascript:;">{text}</a>;
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            attrs: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: "Age",
        dataIndex: "age",
        customRender: renderContent,
      },
      {
        title: "Home phone",
        colSpan: 2,
        dataIndex: "tel",
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {},
          };
          if (index === 2) {
            obj.attrs.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 4) {
            obj.attrs.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: "Phone",
        colSpan: 0,
        dataIndex: "phone",
        customRender: renderContent,
      },
      {
        title: "Address",
        dataIndex: "address",
        customRender: renderContent,
      },
    ];
    return {
      data,
      columns,
    };
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
  background: #f2f2f2;
  height: 100%;
}
.box {
  background: #fff;
  height: 100%;
  border-radius: 5px;
  padding: 10px;
}
.header {
  padding: 15px;
  height: 60px;
  align-items: center;
  display: flex;
  /* padding: 0; */
  justify-content: space-between;
}
.box .header-img {
  width: 36px;
  vertical-align: top;
}
.box .header {
  font-size: 23px;
  color: #000;
  /* font-weight: bold; */
}
.fgx {
  justify-content: flex-start;
  border-top: 1px solid #d9d9d9;
  margin-bottom: 10px;
}
.content {
  margin: 20px;
  /* border: 1px solid #000; */
  height: calc(100vh - 230px);
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  overflow-y: auto;
}
.content::-webkit-scrollbar {
  /*隐藏滚动条 */
  display: none;
}
.button_right {
  position: fixed;
  right: 30px;
  top: 75px;
}
</style>
