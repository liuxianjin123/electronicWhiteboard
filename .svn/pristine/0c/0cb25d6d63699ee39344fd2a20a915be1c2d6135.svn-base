var routerConfig = {
  router:[
    {
      path: "/",
      name: "登录",
      icon: "aliwangwang",
      component: resolve => require(["@/components/system/login"], resolve)
    },
    {
      path: "/nursingBoard",
      name: "电子白板",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/nursingBoard"], resolve)
    },
    {
      path: "/SchedulingBoard",
      name: "排班",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/SchedulingBoard"], resolve)
    },
    {
      path: "/Board",
      name: "白板",
      icon: "aliwangwang",
      component: resolve => require(["@/components/views/Board/Board"], resolve)
    },
    {
      path: "/patientBoard",
      name: "患者",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/patientBoard"], resolve)
    },
    {
      path: "/tendencyEchart",
      name: "评估趋势",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/tendencyEchart"], resolve)
    },
    {
      path: "/analysisDepartment",
      name: "科室分析",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/analysisDepartment"], resolve)
    },
    {
      path: "/advancedTable",
      name: "高级表格",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/advancedTable"], resolve)
    },
    {
      path: "/testHljid",
      name: "手风琴表格",
      icon: "aliwangwang",
      component: resolve => require(["@/components/views/testHljid"], resolve)
    },
    {
      path: "/jjbIndex",
      name: "护理交接班",
      icon: "dingding",
      component: resolve => require(["@/components/views/jjbIndex"], resolve),
      children: [
        {
          path: "/nuxreChangeShifts",
          name: "交班首页",
          icon: "aliwangwang",
          component: resolve =>
            require([
              "@/components/views/ChangeShifts/nuxreChangeShifts"
            ], resolve)
        },
        {
          path: "/feelUnhappy",
          name: "交接&接班",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/ChangeShifts/feelUnhappy"], resolve),
          children: [
            {
              path: "/nexreJb",
              name: "交班",
              icon: "aliwangwang",
              component: resolve =>
                require(["@/components/views/ChangeShifts/nexreJb"], resolve)
            }
          ]
        },
        {
          path: "/ChangeShifts",
          name: "护理交接1班设置",
          lcon: "dingding",
          component: resolve =>
            require(["@/components/views/ChangeShifts/ChangeShifts"], resolve)
        },
        {
          path: "/ShiftSetting",
          name: "护理交接班设置",
          lcon: "dingding",
          component: resolve =>
            require(["@/components/views/ChangeShifts/ShiftSetting"], resolve)
        },
        {
          path: "/ShiftSetting",
          name: "护理交接班设置",
          lcon: "dingding",
          component: resolve =>
            require(["@/components/views/ChangeShifts/ShiftSetting"], resolve)
        }
      ]
    },
    {
      path: "/index",
      name: "主页",
      icon: "aliwangwang",
      component: resolve => require(["@/components/system/index"], resolve),
      children: [
        {
          path: "/form",
          name: "表单",
          icon: "aliwangwang",
          component: resolve => require(["@/components/views/form"], resolve)
        },
        {
          path: "/dialog",
          name: "对话框",
          icon: "aliwangwang",
          component: resolve => require(["@/components/views/dialog"], resolve)
        },
        {
          path: "/testRequest",
          name: "测试请求",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/testRequest"], resolve)
        },
        {
          path: "/testPrint",
          name: "测试打印",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/testPrint"], resolve)
        },
        {
          path: "/testEcharts",
          name: "测试Echarts",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/testEcharts"], resolve)
        },
        {
          path: "/costomParent",
          name: "自定义组件",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/costomParent"], resolve)
        },
        {
          path: "/testVxeTable",
          name: "测试tble组件",
          icon: "aliwangwang",
          component: resolve =>
            require(["@/components/views/testVxeTable"], resolve)
        },
        {
          path: "/ShiftSetting",
          name: "护理人员分组",
          lcon: "dingding",
          component: resolve =>
            require(["@/components/views/ChangeShifts/ShiftSetting"], resolve)
        }
      ]
    },
    {
      path: "*",
      name: "NotFound",
      icon: "aliwangwang",
      component: resolve => require(["@/components/error/404"], resolve)
    }
  ]
};

export default routerConfig;
