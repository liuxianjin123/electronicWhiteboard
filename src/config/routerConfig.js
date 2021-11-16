var routerConfig = {
  router: [
    {
      path: "/",
      name: "登录",
      icon: "aliwangwang",
      component: resolve => require(["@/components/system/login"], resolve)
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
      path: "/dictConfig",
      name: "白板字典设置",
      icon: "aliwangwang",
      component: resolve =>
        require(["@/components/views/Board/dictConfig"], resolve)
    },
    {
      path: "/Board",
      name: "白板",
      icon: "aliwangwang",
      component: resolve => require(["@/components/views/Board/Board"], resolve)
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
