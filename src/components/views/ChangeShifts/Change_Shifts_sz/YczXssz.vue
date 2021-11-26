<template>
  <div>
    <div style="margin: 10px 20px">
      <span> 是否将异常值患者添加到白板: </span>
      <a-switch
        checked-children="开"
        un-checked-children="关"
        v-model="Outliers"
      />
    </div>
    <div class="tab_r" style="">
      <div
        class="p3_tr"
        v-for="(Outliers, index) in p3_Outliers"
        :key="index + 'degree'"
      >
        <span>{{ p3_type[Outliers.type] }}： </span>
        <div class="yichang">{{ p3_symbol[Outliers.symbol] }}</div>
        <div class="yc_value" v-if="Outliers.symbol != 2">
          <input type="number" v-model="Outliers.value" />{{ Outliers.unit }}
        </div>
        <div
          v-if="Outliers.symbol == 2"
          style="display: inline-flex; flex-direction: row"
        >
          <div class="yc_value" style="">
            <input type="number" v-model="Outliers.value" />{{ Outliers.unit }}
          </div>
          ~
          <div class="yc_value" style="">
            <input type="number" v-model="Outliers.value1" />{{ Outliers.unit }}
          </div>
        </div>

        <!-- <div class="yc_color"></div> -->
        <div class="color_div">
          <input type="color" class="color_yc" v-model="Outliers.colour" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Outliers: true, //是否将异常值患者添加到白板 是否开启
      p3_symbol: [">", "<", "<>"],
      p3_type: [
        "体温",
        "体温",
        "体温",
        "呼吸",
        "呼吸",
        "呼吸",
        "脉搏",
        "脉搏",
        "脉搏",
        "血氧饱和度",
        "血氧饱和度",
        "血氧饱和度",
      ],
      p3_Outliers: [
        { type: 0, symbol: 0, value: "11", unit: "°C", colour: "#e51f1f" },
        { type: 1, symbol: 1, value: "", unit: "°C", colour: "#00f57e" },
        {
          type: 2,
          symbol: 2,
          value: "22",
          value1: "98",
          unit: "°C",
          colour: "",
        },
        { type: 3, symbol: 0, value: "", unit: "°C", colour: "" },
        { type: 4, symbol: 1, value: "", unit: "°C", colour: "" },
        {
          type: 5,
          symbol: 2,
          value: "87",
          value1: "98",
          unit: "°C",
          colour: "",
        },
        { type: 6, symbol: 0, value: "", unit: "°C", colour: "" },
        { type: 7, symbol: 1, value: "", unit: "°C", colour: "" },
        {
          type: 8,
          symbol: 2,
          value: "21",
          value1: "98",
          unit: "°C",
          colour: "",
        },
      ], //异常值显示设置
    };
  },

  methods: {
    getyczXssz(arr) {
      //获取数据
      if (arr) {
        this.p3_Outliers = arr;
      }
      console.log(arr);
    },
  },
};
</script>
<style scoped>
.p3_tr {
  width: 450px;
  height: 60px;
  line-height: 60px;
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  /* border:1px solid #ccc; */
}
.p3_tr > span {
  /* width: 30%; */
  /* display: inline-block; */
  flex: 2;
}
.yichang {
  width: 50px;
  height: 25px;
  border: 1px solid #ccc;
  line-height: 20px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 20px;
  flex: 1;
}
.yc_value {
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  /* width: 150px; */
  flex: 3;
  margin-right: 10px;
}
.yc_value input {
  border: none;
  outline: none;
  width: 100px;
  height: 30px;
  text-align: center;
}
.yc_color {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #d9001b;
}
.color_div {
  flex: 2;
}
.color_yc {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: 15px;
}
.dashed {
  border-bottom: 1px dashed #ccc;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
</style>
