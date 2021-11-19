import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import * as echarts from "echarts";
import NProgress from "nprogress"; //顶部路由跳转进度条
import "nprogress/nprogress.css"; //进度条css
import "swiper/swiper-bundle.min.css"; //轮播组件css
import VueAwesomeSwiper from "vue-awesome-swiper"; //轮播组件
import "xe-utils";
import VXETable from "vxe-table"; //table组件
import "vxe-table/lib/style.css"; //table组件css
import XEUils from "xe-utils";
import dayjs from "dayjs"; //时间控件插件
import "../static/js/rem"; //计算高度?
import animate from "animate.css"; //animate动画库css
import requests from "./request/request"; //全局请求
import BoardPublic from "../static/js/BoardPublic"; //定义一些全局方法
Vue.prototype.$eventBus = new Vue();
Vue.prototype.dayjs = dayjs;
Vue.prototype.$utils = XEUils;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$XModal = VXETable.modal;
router.beforeEach((to, from, next) => {
  console.log(to, from);
  /*判断当前所在路由，当前的如果等于要跳转的，抛弃！ */
  if (to.path != "/") {
    if (to.path != from.path) {
      document.title = to.name;
      NProgress.start();
      //所有跳转的路由界面都增加url参数
      const useridinfrom = from.query.user_id;
      const useridinto = to.query.user_id;
      if (!useridinto && useridinfrom) {
        to.query.user_id = useridinfrom;
        next({ ...to });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  NProgress.done();
  let pageNage = to.name;
  let pageUrl = to.path;
  //路由跳转的最后给页面上所有class="request"的button绑定点击事件
  setTimeout(function() {
    let aLi = document.getElementsByClassName("request");
    for (var i = 0; i < aLi.length; i++) {
      aLi[i].onclick = function() {
        //console.log(router.history.current.query.user_id);
        //发起请求后1秒抓取相应的参数
        setTimeout(() => {
          console.log(
            `在页面[${pageNage + pageUrl}]中请求了[${
              sessionStorage.requestUrl
            }],参数为${sessionStorage.requestParam}`
          );
        }, 1000);
      };
    }
  }, 100);
});
Vue.use(VXETable);
Vue.use(Antd);
Vue.use(requests);
Vue.use(VueAwesomeSwiper);
Vue.use(animate);
Vue.use(BoardPublic);
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay]);
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
