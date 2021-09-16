<template>
    <div class="content">
        <!-- <section class="item-config">
            <div id="fxpg" ref="fxpg"></div>
        </section> -->
         <div id="fxpg" ref="fxpg"></div>
        <table class="biaotab">
            <tr>
                <td>
                    <div class="td1"></div>
                    无风险
                </td>
                <td v-for="item ,index in wfx" :key="index">{{item}}</td>
            </tr>
            <tr>
                <td>
                    <div class="td2"></div>
                    低危人数
                </td>
                <td v-for="item ,index in dv" :key="index">{{item}}</td>

            </tr>
            <tr>
                <td>
                    <div class="td3"></div>
                    中危人数
                </td>
                <td v-for="item ,index in zv" :key="index">{{item}}</td>

            </tr>
            <tr>
                <td>
                    <div class="td4"></div>
                    高危人数
                </td>
                <td v-for="item ,index in gv" :key="index">{{item}}</td>

            </tr>
             <tr>
                <td>
                    <div class="td5"></div>
                    极高危人数
                </td>
                <td v-for="item ,index in jv" :key="index">{{item}}</td>

            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
           dv:[],
           zv:[],
           gv:[],
           jv:[],
           wfx:[], 
           yz:'',//Y轴最大值
        };
    },
    props:{
        fxpg:{},
    },
    watch: {
        fxpg() {
         this.getDataAll();
        }
    },
    mounted() {
        this.getDataAll();
    },
    methods: {
        dataarr(arr){//把数据生成数组
            var arr1=[];
            for(let i=0;i<arr.length;i++){
                arr1.push(arr[i].count);
            }
            return arr1;
        },
         getDataAll(){
            if(this.fxpg.无风险){
                //  console.log(this.fxpg,1);
                //处理数组
                this.wfx=this.dataarr(this.fxpg.无风险);
                this.dv=this.dataarr(this.fxpg.低风险);
                this.zv=this.dataarr(this.fxpg.中风险);
                this.gv=this.dataarr(this.fxpg.高风险);
                this.jv=this.dataarr(this.fxpg.极高风险);
                // console.log('jv',this.jv,this.gv,this.zv,this.dv,'wu',this.wfx);
                //统计图的纵向Y轴值
                let a =this.wfx[0]+this.dv[0]+this.zv[0]+this.gv[0]+this.jv[0];
                let b =this.wfx[1]+this.dv[1]+this.zv[1]+this.gv[1]+this.jv[1];
                let c =this.wfx[2]+this.dv[2]+this.zv[2]+this.gv[2]+this.jv[2];
                let d =this.wfx[3]+this.dv[3]+this.zv[3]+this.gv[3]+this.jv[3];
                let e =this.wfx[4]+this.dv[4]+this.zv[4]+this.gv[4]+this.jv[4];
                // console.log(a,b,c,d,e);
                this.yz = this.bizhi(this.bizhi(this.bizhi(this.bizhi(a,b),c),d),e)/10+1;
                this.yz = parseInt(this.yz)*10;
                // console.log(this.yz);
                this.fxpg1();
            }
        },
        bizhi(x,y){
            if(x>=y){return x}
            else{return y};
        },
        fxpg1(){
        const chart = this.$refs.fxpg;
        var myChart = this.$echarts.init(fxpg);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: ['#963D3B','#ce4643', '#D76E6E', '#E5B7B7', '#F2E2E2'],
            legend: {
                data: ['极高危人数','高危人数', '中危人数', '低危人数', '无风险']
            },
            grid: {
                left: '8%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['压疮', '跌倒', '导管', '疼痛', '自理能力']
                }
            ],
            yAxis: [{
                show: true,
                offset: 40,
                type: "value",
                position: "left", 
                min: 0, //刻度尺最小单位。
                max: this.yz, //刻度尺最大单位。
                interval: this.yz/10, //强制分割单位。
            }],
            series: [
                {
                    name: '极高危人数',
                    type: 'bar',
                    stack: '风险评估',
                    emphasis: {
                        focus: 'series'
                    },
                    barMaxWidth:'20%',
                    itemStyle:{
                        normal:{
                            borderRadius: 50,
                        }
                    },
                    data: this.jv
                    // data: [20, 32, 11, 34, 9]
                },
                {
                    name: '高危人数',
                    type: 'bar',
                    stack: '风险评估',
                    emphasis: {
                        focus: 'series'
                    },
                    barMaxWidth:'20%',
                    itemStyle:{
                        normal:{
                            borderRadius: 50,
                        }
                    },
                    data: this.gv
                    // data: [20, 32, 11, 34, 9]
                },
                {
                    name: '中危人数',
                    type: 'bar',
                    stack: '风险评估',
                    emphasis: {
                        focus: 'series'
                    },
                    barMaxWidth:'20%',
                    data: this.zv,
                    // data: [20, 12, 19, 24, 20],
                    itemStyle:{
                        normal:{
                            borderRadius: 50,
                        }
                    },
                },
                {
                    name: '低危人数',
                    type: 'bar',
                    stack: '风险评估',
                    emphasis: {
                        focus: 'series'
                    },
                    barMaxWidth:'20%',
                    data: this.dv,
                    // data: [15, 22, 20, 25, 10],
                    itemStyle:{
                        normal:{
                            borderRadius: 50,
                        }
                    },
                },
                {
                    name: '无风险',
                    type: 'bar',
                    stack: '风险评估',
                    emphasis: {
                        focus: 'series'
                    },
                    barMaxWidth:'20%',
                    data: this.wfx,
                    // data: [10, 22, 21, 14, 30],
                    itemStyle:{
                        normal:{
                            borderRadius: 50,
                        }
                    },
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        window.onresize = function () {
            myChart.resize();
        };
    },
    }

}
</script>
<style scoped>
    .content{
        height: 670px;
        padding: 10px;
    }
    #fxpg {
        width: 700px;
        height: 470px;
    }
    .biaotab{
        width: 90%;
        margin-left: 3%;
        /* margin-top: 0.2rem; */
        text-align: left;
        font-size: 16px;
        font-weight: bold;
    }
    .biaotab>tr{
        height: 40px;
    }
    .biaotab>tr>td{
        width: 17%;
    }
    .td1,.td2,.td3,.td4,.td5{
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 50%;
    }
    .td5{
        background: #963D3B;
    }
    .td4{
        background: #ce4643;
    }
    .td3{
        background: #D76E6E;
    }
    .td2{
        background: #E5B7B7;
    }
    .td1{
        background: #F2E2E2;
    }
</style>