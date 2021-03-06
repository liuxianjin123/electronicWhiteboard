export default {
  install(Vue, options) {
    Vue.prototype.$Page = {
      getDate() {
        //获取当前时间
        let d, s;
        d = new Date();
        s = d.getFullYear() + "-"; //取年份
        s =
          s +
          (d.getMonth() + 1 < 10
            ? "0" + (d.getMonth() + 1)
            : d.getMonth() + 1) +
          "-"; //取月份
        s += (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " "; //取日期
        s += (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"; //取小时
        s +=
          (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":"; //取分
        s +=
          (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()) + " ";
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
      },
      fullScreen() {
        //进入全屏
        let el = document.documentElement,
          rfs =
            el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullScreen,
          wscript;

        if (typeof rfs != "undefined" && rfs) {
          rfs.call(el);
          return;
        }

        if (typeof window.ActiveXObject != "undefined") {
          wscript = new ActiveXObject("WScript.Shell");
          if (wscript) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      exitFull() {
        //退出全屏
        let el = document,
          cfs =
            el.cancelFullScreen ||
            el.webkitCancelFullScreen ||
            el.mozCancelFullScreen ||
            el.exitFullScreen,
          wscript;

        if (typeof cfs != "undefined" && cfs) {
          cfs.call(el);
          return;
        }

        if (typeof window.ActiveXObject != "undefined") {
          wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      baseUrls(e) {
        let url1 = "http://192.168.0.80:666"; //三台县人民医院电子护理白板正式库
        let url2 = "http://192.168.1.9:8909"; //公司内网白板
        let url3 = "http://192.168.1.9:5005"; //公司内网交接班
        switch (e) {
          case 1:
            return url1;
            break;
          case 2:
            return url2;
            break;
          case 3:
            return url3;
            break;
        }
      },
      getNextDate(date, day) {
        //当前时间+1或者-1
        let dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        let y = dd.getFullYear();
        let m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      },
    };
  },
};
