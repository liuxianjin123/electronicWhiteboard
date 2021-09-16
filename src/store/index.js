import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        dataType: 0, //护士需要展示交接班全科的数据还是自己所管床的数据
        updateGroupData: false, //更新交接班全局数据
        isjj: true, //判断用户点击的是交班还是接班
        createJbsj: false, //生成交班数据
        token: '',
        userId: '',
        baseUrl: 'http://172.16.252.250:8082',
        operatorMsg: null, //操作员信息
        board: {
            boardBqdm: null, //病区代码
            boardItem: null, //同病区不同楼层的分组
            boardwardName: null, //病区名称
            darkMode:false,
            darkModeColor:'#00FFFF',
            whiteColor:'#196D9D',
            darkModeBg:'#2E4E75',
            whiteBg:'transparent',
            darkModeShadow:'#4570a2 0px 0px 11px 4px',
            whiteShadow:'rgb(222 221 221) 0px 0px 11px 3px'
        }
    },
    mutations: {
        updateBoardItem(state, data) {
            if(data){
                this.state.board.boardBqdm = data;  
            }else{
                this.state.board.darkMode = !this.state.board.darkMode;
            }
        },
        updateDataType(state, data) {
            this.state.dataType = this.state.dataType == 0 ? 1 : 0
        },
        updateGroupData(state, data) {
            this.state.updateGroupData = data;
        },
        updateisjj(state, data) {
            this.state.isjj = data;
        },
        updateOperatorMsg(state, data) {
            this.state.operatorMsg = data;
        },
        updateCreateJbsj(state) {
            this.state.createJbsj = !this.state.createJbsj;
            console.log("生成交班目前的状态是：" + this.state.createJbsj)
        }
    }
})

export default store