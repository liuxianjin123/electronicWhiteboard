<template>
  <div>
    <draggable
      class="syllable_ul"
      dragClass="nb"
      element="ul"
      :list="syllable"
      :options="{ group: 'title', animation: 150 }"
      :no-transition-on-drag="true"
      :forceFallback="true"
      @change="change"
      @start="start"
      @end="end"
      :move="move"
    >
      <li v-for="item in syllable" :key="item.id">{{ item.title }}</li>
    </draggable>
    <a-divider orientation="left"> Left Text </a-divider>
    <div class="box">
      <div>
        <h3>Draggable 1</h3>
        <draggable
          class="list-group"
          :list="list1"
          :options="{ animation: 150 }"
          group="people"
          @add="add"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div>
        <h3>Draggable 2</h3>
        <draggable
          class="list-group"
          :list="list2"
          :options="{ animation: 150 }"
          group="people"
          @add="add"
          filter=".forbid"
        >
          <div
            class="list-group-item forbid"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </div>
    <div>
      {{ JSON.stringify(list2) }}
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      modal1Visible: false,
      modal2Visible: false,
      drag: true,
      syllable: [
        { id: 1, title: "组合1" },
        { id: 2, title: "组合2" },
        { id: 3, title: "组合3" },
        { id: 4, title: "组合4" },
        { id: 5, title: "组合5" },
        { id: 6, title: "组合6" },
        { id: 7, title: "组合7" },
        { id: 8, title: "组合8" },
        { id: 9, title: "组合9" },
      ],
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
    change(evt) {
      console.log(evt, "change...");
    },
    //start ,end ,add,update, sort, remove 得到的都差不多
    start(evt) {
      this.drag = true;
      console.log(evt, "start...");
    },
    end(evt) {
      console.log(evt, "end....");
      this.drag = true;
      evt.item; //可以知道拖动的本身
      evt.to; // 可以知道拖动的目标列表
      evt.from; // 可以知道之前的列表
      evt.oldIndex; // 可以知道拖动前的位置
      evt.newIndex; // 可以知道拖动后的位置
    },
    move(evt, originalEvent) {
      console.log(evt, "move");
      console.log(originalEvent); //鼠标位置
    },
    add: function (evt) {
      console.log(evt, "move");
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt) {},
  },
  components: {
    draggable,
  },
  created() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.syllable_ul {
  list-style: none;
  height: 200px;
  overflow: auto;
}
.syllable_ul li {
  width: 350px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #ddd;
  margin: 5px 0;
}
/******* */
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
.nb {
  border: 2px solid green !important;
}
</style>
