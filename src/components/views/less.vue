<template>
  <div class="container">
    <header>
      <p>
        <span>span1</span>
        <span>span2</span>
        <span>span3</span>
        <span>span4</span>
        <span>span5</span>
      </p>
    </header>
    <section>
      <ul>
        <li>li1</li>
        <li>li2</li>
        <li>li3</li>
        <li>li4</li>
        <li>li5</li>
      </ul>
    </section>
    <footer></footer>
    <div
      id="components-affix-demo-target"
      ref="container"
      class="scrollable-container"
    >
      <a-affix :target="() => this.$refs.container" class="affix">
        <a-button type="primary">
          我是按钮1
        </a-button>
      </a-affix>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque
        suscipit voluptate eos sint repudiandae, velit ipsum? Libero quisquam
        cum hic temporibus! Vitae esse magnam labore vel? Dolores, nam qui!
      </p>
      <a-affix :target="() => this.$refs.container" class="affix">
        <a-button type="primary">
          我是按钮2
        </a-button>
      </a-affix>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque
        suscipit voluptate eos sint repudiandae, velit ipsum? Libero quisquam
        cum hic temporibus! Vitae esse magnam labore vel? Dolores, nam qui!
      </p>
      <a-affix :target="() => this.$refs.container" class="affix">
        <a-button type="primary">
          我是按钮3
        </a-button>
      </a-affix>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque
        suscipit voluptate eos sint repudiandae, velit ipsum? Libero quisquam
        cum hic temporibus! Vitae esse magnam labore vel? Dolores, nam qui!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {},
  mounted() {
    var d = "666";
    var ds = '777';
  }
};
</script>
<style lang="less" scoped>
/*申明当前页面内css变量*/
@width: 50px;
@width2: 0.5;
.flex {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.container {
  header,
  section,
  footer {
    border: 5px dashed red;
    margin: 10px 0;
  }
  section {
    ul {
      list-style: none;
      .flex();
      font-size: 25px;
      line-height: 50px;
      li {
        margin: 10px 10px 10px;
        border-width: 10px 10px 0px;
        border-style: double;
        border-color: tomato;
        border-radius: 10px;
        width: @width+50px;
      }
      li:last-child {
        background: #000;
      }
    }
  }
  footer {
    width: percentage(@width2); // returns `50%`使用less函数
    background: #ddd;
    transition: all 0.3s;
    height: 50px;
    user-select: none;
    &:hover {
      font-size: 60px;
      color: #fff;
      height: 150px;
      width: percentage(0.8);
      background-color: blue;
      border-color: hotpink;
      border-style: solid;
    }
    &:active {
      background: red;
      cursor: pointer;
    }
  }
  #components-affix-demo-target.scrollable-container {
    border: 1px solid red;
    height: 300px;
    overflow-y: scroll;
    background: #eee;
    overflow: auto;
    p {
      font-size: 50px;
    }
  }
}

header {
  color: red;
  p {
    .flex(); /*使用变量 */
  }
  p span {
    font-size: 25px;
  }
}
</style>
<style scoped>
.affix >>> div {
  background: #fff;
}
</style>
