import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from '@/config/routerConfig'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: routerConfig.router
})