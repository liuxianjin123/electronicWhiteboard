<template>
  <div class="body">
    <a-form :label-col="{ span: 1 }" :wrapper-col="{ span: 4 }">
      <a-form-item label=" 类型">
        <a-select v-model="leixing" placeholder="请选择类型">
          <a-select-option v-for="i in leixingarr" :key="i.id" :value="i.id">{{
            i.name
          }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <div class="tab_h row">
      <div class="th_1" style="flex: 2">班次</div>
      <div class="th_2" style="flex: 7">时间设置</div>
      <div class="th_3" style="flex: 3">是否启用</div>
    </div>
    <div class="tab_r">
      <div
        class="row p1_tr"
        v-for="(Frequency, index) in p1_Frequency"
        :key="index"
      >
        <div class="tr_1" style="flex: 2">
          {{ Frequency.canNotDelete ? Frequency.name : "" }}
          <input
            v-if="!Frequency.canNotDelete"
            class="p1index_add"
            type="text"
            maxlength="4"
            v-model="Frequency.name"
            placeholder="班次名称"
          />
        </div>
        <div class="tr_2" style="flex: 7">
          <input class="p1_input" type="time" v-model="Frequency.startTime" />
          至
          <input class="p1_input" type="time" v-model="Frequency.endTime" />
        </div>
        <div class="tr_3" style="flex: 3">
          <a-switch
            checked-children="ON"
            v-show="Frequency.canNotDelete"
            un-checked-children="OFF"
            @click="Frequencystate(index)"
            :default-checked="Frequency.isEnable"
          />
          <a-button
            type="danger"
            v-show="Frequency.canNotDelete == false"
            @click="FrequencyDelete(p1_Frequency, index, Frequency.id)"
          >
            删除
          </a-button>
        </div>
      </div>
    </div>

    <div class="bj" @click="FrequencyAdd(p1_Frequency)">
      <a-icon type="plus" style="font-size: 30px; padding: 5px" />
      <div>新增</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leixing: 1, //选中类型
      leixingarr: [
        { id: 1, name: "患者交接班" },
        // { id: 2, name: "物资交接班" },
        // { id: 3, name: "载体交接班" },
      ], //所有类型
      p1_Frequency: [
        {
          name: "白班",
          startTime: "12:30",
          endTime: "18:40",
          isEnable: true,
          canNotDelete: true, //false 可以被删除  true 不能删除
        },
        {
          name: "大夜",
          startTime: "",
          endTime: "",
          isEnable: true,
          canNotDelete: true, //false 可以被删除  true 不能删除
        },
        {
          name: "小夜",
          startTime: "",
          endTime: "",
          isEnable: true,
          canNotDelete: true, //false 可以被删除  true 不能删除
        },
      ], //交班班次设置数组 默认
      p1_Frequencydelete: [], //删除的数据
      p1_FrequencyAdd: [
        {
          canNotDelete: false, //false 可以被删除  true 不能删除
          endTime: "",
          id: null,
          isEnable: true, //是否开启 需要默认开启
          name: "",
          startTime: "",
          sort: 100,
        },
      ],
    };
  },

  methods: {
    getjjbBcsz(arr) {
      //获取数据
      if (arr) {
        this.p1_Frequency = arr;
      }
      // console.log(arr);
    },
    FrequencyDelete(arr, index, id) {
      //交班班次 删除
      arr.splice(index, 1);
      if (id != null) {
        this.p1_Frequencydelete.push(id);
      }
    },
    FrequencyAdd(arr) {
      //增加指定数值
      arr.push(this.p1_FrequencyAdd[0]);
      console.log(arr);
      return arr;
    },
  },
};
</script>
<style scoped>
.tab_r::-webkit-scrollbar {
  /*隐藏滚动条 */
  display: none;
}
.bj {
  background-image: url(../../../../../static/images/ChangeShifts_now/jjbbcsz_bj.svg);
  background-size: 100% 100%;
  height: 80px;
  width: 96%;
  margin-left: 2%;
  text-align: center;
  padding: 5px;
  color: rgba(25, 109, 157, 1);
}
.row {
  display: flex;
  flex-direction: row;
}
.tab_h {
  background-color: #f2f2f2;
  font-weight: bold;
}
.tab_r {
  overflow: auto;
  height: calc(100% - 130px);
}
.tab_r > .p1_tr,
.tab_h {
  height: 60px;
  line-height: 60px;
}
.tab_h,
.tab_r {
  width: 96%;
  margin-left: 2%;
  text-align: center;
  /* border:1px solid #eee; */
}
input[type="time"] {
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: 40%;
  height: 30px;
  text-align: center;
}
.p1index_add {
  width: 90%;
  height: 30px;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
}
</style>
