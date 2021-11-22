<template>
  <div class="container">
    <header>
      <div>
        <span></span>
        <a-button type="primary" icon="download" :size="size">
          Download
        </a-button>
      </div>
      <div>
        <a-form-item label="Note">
          <a-input v-model="g" />
        </a-form-item>
      </div>
    </header>
    <section>
      <a-table :columns="columns" :data-source="data" bordered>
        <template slot="name" slot-scope="text">
          <a>{{ text }}</a>
        </template>
      </a-table>
    </section>
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
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park",
  },
];
export default {
  name: "NurseChangeShifts",
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
      g: "66",
      data,
      columns,
    };
  },
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
}
</style>
