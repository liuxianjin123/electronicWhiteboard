import axios from 'axios'
///接口文档地址：https://www.showdoccc/AIMS?page_id=4264603188555394
const instance = axios.create({
        //baseURL: 'http://192.168.0.80:666', //正式库
        baseURL: 'http://192.168.1.9:5005', //白板
        //baseURL: 'http://192.168.1.9:5005', //交接班
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
    //请求拦截
instance.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config
})
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return err
})

export default {
    install(Vue, options) {
        Vue.prototype.$axios = {
            get(url, params) {
                return instance({
                    method: 'get',
                    url,
                    params: params
                })
            },
            delete(url, params) {
                return instance({
                    method: 'delete',
                    url,
                    data: params
                })
            },
            post(url, params) {
                return instance({
                    method: 'post',
                    url,
                    data: params
                })
            }
        }
    }
}