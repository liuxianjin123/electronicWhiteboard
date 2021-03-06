import Vue from "vue";
import router from "../router";
import axios from "axios";
import { message } from "ant-design-vue";
///接口文档地址：https://www.showdoccc/AIMS?page_id=4264603188555394lxj
const instance = axios.create({
  //baseURL: "http://192.168.1.192:5001", //白板测试库
  //baseURL: 'http://192.167.0.80:5005', //白板正式库
  baseURL: "http://192.168.1.9:5005", //交接班
  responseType: "json",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
//请求拦截LXJ666
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.toString().search("401") > -1) {
      message.error("请求用户身份未认证");
    } else if (err.toString().search("404") > -1) {
      message.error("请求地址错误");
    } else if (err.toString().search("500") > -1) {
      message.error("请求服务器发生错误");
    } else {
      message.error("请求错误");
    }
    return err;
  }
);

export default {
  install(Vue, options) {
    Vue.prototype.$axios = {
      get(url, params) {
        setRequestParam(url, params);
        return instance({
          method: "get",
          url,
          params: params,
        });
      },
      delete(url, params) {
        setRequestParam(url, params);
        return instance({
          method: "delete",
          url,
          data: params,
        });
      },
      post(url, params) {
        setRequestParam(url, params);
        return instance({
          method: "post",
          url,
          data: params,
        });
      },
    };
  },
};
function setRequestParam(url, params) {
  //console.log(router.history.current.query.user_id);
  sessionStorage.requestUrl = url;
  sessionStorage.requestParam = JSON.stringify(params);
}
