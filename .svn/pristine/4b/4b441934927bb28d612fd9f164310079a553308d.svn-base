<template>
  <div
    class="title"
    :style="{
      color: $store.state.board.darkMode
        ? $store.state.board.darkModeColor
        : $store.state.board.whiteColor
    }"
  >
    <div class="title-icon">
      <img src="static/images/Board/yyLogo.png" alt="" />
      <h1
        :style="{
          color: $store.state.board.darkMode
            ? $store.state.board.darkModeColor
            : $store.state.board.whiteColor,
          fontSize: '36px'
        }"
      >
        {{ yymc }}{{ bqmc }}
      </h1>
    </div>
    <div class="title-date">
      <span>{{ NowDate }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yymc:"绵阳市***人民医院",
      bqmc: "****科病区",
      dates: null
    };
  },
  props:{
    bqdm:String
  },
  
  methods: {
    //获取医院基本信息
    async getYYms() {
      const res = await this.$axios.get(
        "/han/WhiteBoardApi/GetOrgName/"+this.$route.query.bqdm
      );
      this.yymc=res.result.yymc;
      this.bqmc=res.result.bqmc;
    }
  },
  watch: {
    displayMode: function(newVal, oldVal) {
      newVal
        ? (this.darklyFontColor = "#44ffe5")
        : (this.darklyFontColor = "#196D9D");
    }
  },
  computed: {
    NowDate() {
      return this.dates;
    }
  },
  mounted() {
    this.getYYms();
    return setInterval(() => {
      this.dates = this.$Page.getDate();
    }, 1000);
  },
};
</script>
<style scoped>
.title {
  margin: auto;
  width: 1890px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title .title-icon {
  display: flex;
  align-items: center;
}

.title .title-icon img {
  height: 70px;
  width: 70px;
  margin-right: 20px;
}

.title .title-icon h1,
.title-date {
  font-weight: bold;
  margin: 0;
}

.title .title-date {
  font-size: 23px;
  margin-right: 20px;
}
</style>
