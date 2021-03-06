import Vue from "vue";
let v = new Vue();
let objs = {
  loadTable: true, //加载中的load
  showModel: false, //控制管道等类型弹窗的显示隐藏
  czy: null, //暂存操作员信息
  brxx: null, //暂存病人信息
  zyh: null, //用于接受记录传入的住院号
  formData3: {
    //控制管道等类型弹窗的选中的数据
    gdlx: [], //弹窗选项的项目
  },
  serchG: "6666", //用于检索过多的弹窗选项
  editRow: null, //用于记录当前弹窗调用行数(具体是哪行调用了弹窗选项)
  sexList: [
    //弹窗字典，根据点击的项目动态设置对应项目
    { label: "尿管", value: "尿管" },
    { label: "胃管", value: "胃管" },
    { label: "胸腔引流管", value: "胸腔引流管" },
    { label: "腹腔引流管", value: "腹腔引流管" },
    { label: "cvc", value: "cvc" },
    { label: "T管", value: "T管" },
    { label: "PICC", value: "PICC" },
    { label: "保留胃管", value: "保留胃管" },
    { label: "气管插管", value: "气管插管" },
  ],
  gridOptions: {
    //整个数据表格的配置集合
    ref: "xTable", //表格的名字(类似于ID，后面操作表格的数据都需要它来当做找到表格的索引)
    border: true, //表格显示边框
    align: "center", //所有内容居中显示
    size: "mini", //表格的规格
    resizable: true, //所有的列是否允许拖动列宽调整大小
    keepSource: true, //保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等（开启后影响性能，具体取决于数据量）
    round: true, //	是否为圆角边框
    highlightCurrentRow: true, //是否要高亮当前行
    highlightCurrentColumn: true, //是否要高亮当前列
    showOverflow: true, //没用，设置虚拟滚动之后此属性失效
    autorResize: true, //	自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
    id: "toolbar_demo_1", //表格ID
    height: "auto", //auto则表示自动撑满父元素
    editConfig: {
      //可编辑配置项
      trigger: "click", //触发方式：点击
      mode: "row", //row（行编辑模式）
      showIcon: false, //是否显示列头编辑图标
      showStatus: true, //只对 keep-source 开启有效，是否显示单元格新增与修改状态(新增&修改每个单元格会有标志)
      activeMethod: this.activeRowMethod, //该方法的返回值用来决定该单元格是否允许编辑(比如说点击此行数据，会首先判断填写人和当前操作员ID是否一致，由此判断权限)
    },
    formConfig: {
      //顶部的操作表单
      titleWidth: 100, //提示项titie宽度
      items: [
        //form各项成员
        { field: "", title: "护理记录单", span: 2 },
        { field: "", title: "姓名：廖春菊", span: 2 },
        { field: "", title: "床位：0008", span: 2 },
        {
          field: "jlsj",
          title: "录入时间",
          span: 6,
          itemRender: { name: "$input", props: { placeholder: "请选择时间" } },
        },
        {
          span: 12,
          align: "right",
          collapseNode: true,
          itemRender: {
            name: "$buttons",
            children: [
              {
                props: { type: "button", content: "查 询", status: "primary" },
              },
              {
                props: { type: "button", content: "保 存", status: "primary" },
                events: { click: this.saveEvent },
              }, //保存按钮
              {
                props: { type: "button", content: "打 印", status: "success" },
                events: { click: this.printTable },
              }, //打印
            ],
          },
        },
      ],
    },
    keyboardConfig: {
      //按键配置项
      isArrow: true, //开启方向键功能
      isDel: true, //开启删除键功能
      isEnter: true, //开启回车键功能HGHGHGHGH
      isTab: true, //开启 Tab 键功能
      isEdit: true, //开启任意键进入编辑（功能键除外）
      enterToTab: true, //是否将回车键行为改成 Tab 键行为
    },
    menuConfig: {
      //快捷菜单配置项
      enabled: true, //是否启用
      header: {
        disabled: true, //表头禁止右键菜单
      },
      body: {
        disabled: false,
        options: [
          //表格中间区域的右键菜单
          [
            { code: "insertAt", name: "新增", disabled: false }, //disabled：是否禁用
            { code: "remove", name: "删除", disabled: this.delSp },
            { code: "copy", name: "复制", disabled: false },
            { code: "sp", name: "审批", disabled: this.delSp },
          ],
        ],
      },
    },
    columns: [
      //表头组成的JSON
      {
        field: "jlsj", //对应的字段名
        title: "时间", //界面显示的文字
        sortable: true, //是否支持排序
        width: 150, //列宽
        minWidth: 120, //最大列宽
        fixed: "left", //固定列：left,right
        editRender: {
          //可编辑控件
          name: "$input", //控件类型
          props: { type: "datetime", placeholder: "请选择日期" },
        },
      },
      {
        field: "tw",
        title: "体温",
        minWidth: 60,
        editRender: {
          name: "$input",
          props: { type: "number" },
        },
      },
      {
        field: "mb",
        title: "脉搏",
        width: 60,
        editRender: { name: "$input", props: { type: "number" } },
      },
      {
        field: "hx",
        title: "呼吸",
        width: 60,
        editRender: { name: "$input", props: { type: "number" } },
      },
      {
        title: "血压",
        children: [
          {
            field: "ssy",
            title: "收缩压",
            width: 60,
            editRender: { name: "input", props: { type: "number" } },
          },
          {
            field: "szy",
            title: "舒张压",
            width: 60,
            editRender: { name: "input", props: { type: "number" } },
          },
        ],
      },
      {
        field: "ybhd",
        title: "SPO2",
        width: 60,
        editRender: { name: "input", props: { type: "number" } },
      },
      {
        field: "wljw",
        title: "物理降温",
        width: 120,
        editRender: { name: "input" },
      },
      {
        title: "吸氧",
        children: [
          {
            field: "xy",
            title: "流量(L/min)",
            width: 90,
            editRender: { name: "input", props: { type: "number" } },
          },
          {
            field: "xyfs",
            title: "方式",
            width: 120,
            editRender: { name: "$input" },
          },
        ],
      },
      {
        field: "ys",
        title: "意识",
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
                field: "tkz",
                title: "大小(mm)",
                width: 70,
                editRender: { name: "input", props: { type: "number" } },
              },
              {
                field: "dgfsz",
                title: "光反应",
                width: 90,
                editRender: { name: "input" },
              },
            ],
          },
          {
            title: "右",
            children: [
              {
                field: "tky",
                title: "大小(mm)",
                width: 70,
                editRender: { name: "input", props: { type: "number" } },
              },
              {
                field: "dgfsy",
                title: "光反应",
                width: 90,
                editRender: { name: "input" },
              },
            ],
          },
        ],
      },
      {
        field: "fs",
        title: "是否翻身",
        width: 90,
        editRender: { name: "$input" },
      },
      {
        title: "管道",
        children: [
          {
            field: "gdlx",
            title: "管道类型",
            width: 120,
            editRender: {
              name: "$input",
              events: { focus: this.roleChangeEvent },
            },
          },
          {
            field: "gdlx_qt",
            title: "管道其他",
            width: 220,
            editRender: { name: "input" },
          },
        ],
      },
      {
        field: "bqgc",
        title: "病情观察",
        width: 520,
        editRender: {
          name: "textarea",
        },
      },
      {
        field: "cUserName",
        title: "护士签名",
        width: 80,
      },
    ],
    data: [],
  },
};

function tests() {
  return "13245456456456456456456";
}

function getDate() {
  //获取当前时间
  let d, s;
  d = new Date();
  s = d.getFullYear() + "-"; //取年份
  s =
    s +
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
    "-"; //取月份
  s += (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " "; //取日期
  s += (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"; //取小时
  s += (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":"; //取分
  s += (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()) + " ";
  let myddy = d.getDay();
  let weekday = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ]; //取秒
  s += weekday[myddy];
  return s;
}

export { getDate, tests, objs };
