function getDate() {
    //获取当前时间
    var d, s;
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
    var myddy = d.getDay();
    var weekday = [
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

function fullScreen() { //进入全屏
    var el = document.documentElement,
        rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
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
};

function exitFull() { //退出全屏
    var el = document,
        cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
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
}
export { getDate, fullScreen, exitFull }