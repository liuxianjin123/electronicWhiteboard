import axios from 'axios'
///接口文档地址：https://www.showdoccc/AIMS?page_id=4264603188555394
const instance = axios.create({
        //正式库：http://192.168.0.80:666
        //邓斌：http://172.16.252.250:8082
        //邓斌公司:http://192.168.1.9:8909http://192.168.1.201:8083/Frame/Login.aspx
        // baseURL: 'http://192.168.0.80:666', ////http://192.168.0.80:666//http://192.168.0.80:8077
        // baseURL: 'http://192.168.1.9:8909',
        baseURL: 'http://192.168.1.9:5005', //交接班
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
    //请求拦截
instance.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    //console.log(config)
    return config
})
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return err
})
export function post1(url, params) {
    return instance({
        method: 'post',
        url,
        data: params
    })
}
export function potdelete1(url, params) {
    return instance({
        method: 'delete',
        url,
        data: params
    })
}
export function get1(url, params) {
    return instance({
        method: 'get',
        url,
        params: params
    })
}