<template>
  <div>
    <!--main-->
    <table class="dataTabble">
      <thead>
        <draggable v-model="tablehead" element="tr" animation="500">
          <th v-for="(item, id) in tablehead" :key="id" :width="item.width">
            {{ item.title }}
          </th>
        </draggable>
      </thead>
      <draggable
        v-model="tablelist"
        element="tbody"
        animation="500"
        @update="datadragEnd"
      >
        <tr v-for="(item, id) in tablelist" :key="id">
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.num }}</td>
          <td>1111</td>
        </tr>
      </draggable>
    </table>

    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      ref="tableSort"
    >
    </a-table>
    <div class="box">
      <div>
        <h3>Draggable 1</h3>
        <div class="list-group" ref="group">
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </div>
      </div>

      <div>
        <h3>Draggable 2</h3>
        <div class="list-group" ref="group2">
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import Sortable from "sortablejs";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 111,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 222,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 333,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  components: {
    draggable,
  },
  data() {
    return {
      tablehead: [
        { id: 1, title: "栏目名称", width: "110" },
        { id: 2, title: "发布时间", width: "150" },
        { id: 3, title: "公告数量", width: "210" },
        { id: 4, title: "操作", width: "160" },
      ],
      tablelist: [
        { id: 1, name: "活动消息1", time: "2018-08-25 14：54", num: "1000" },
        { id: 2, name: "公司消息2", time: "2018-08-25 14：54", num: "200" },
        { id: 3, name: "个人消息3", time: "2018-08-25 14：54", num: "30000" },
        { id: 4, name: "客户消息4", time: "2018-08-25 14：54", num: "40" },
      ],
      data,
      columns,
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  methods: {
    datadragEnd(evt) {
      console.log("拖动前的索引 :" + evt.oldIndex);
      console.log("拖动后的索引 :" + evt.newIndex);
      console.log(this.tablelist);
    },
    //  拖拽排序方法
    dragSort() {
      const tableSort = this.$refs.tableSort;
      this.sortable = Sortable.create(tableSort.$el.querySelector("tbody"), {
        animation: 150,
        onEnd: ({ newIndex, oldIndex }) => {
          console.log(oldIndex,"原始下标");
          const currRow = this.data.splice(oldIndex, 1)[0];//获取接收数据的第一个成员，也就是被移除的当前移动的成员
          console.log(currRow);
          this.data.splice(newIndex, 0, currRow);
        },
      });
      new Sortable(this.$refs.group, {
        group: "shared", // set both lists to same group
        animation: 150,
      });

      new Sortable(this.$refs.group2, {
        group: "shared",
        animation: 150,
      });
    },
    add: function (evt) {
      console.log(evt, "move");
    },
  },
  mounted() {
    this.dragSort();
  },
};
</script>
<style>
* {
  user-select: none;
}
.dataTabble th,
.dataTabble td {
  border: 1px solid #ddd;
  padding: 5px 10px;
}
.dataTabble tr {
  height: 40px;
}
.list-group {
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  min-height: 20px;
  width: 300px;
}
.list-group-item:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: move;
}
.box {
  width: 620px;
  display: flex;
  justify-content: space-between;
}
</style>
