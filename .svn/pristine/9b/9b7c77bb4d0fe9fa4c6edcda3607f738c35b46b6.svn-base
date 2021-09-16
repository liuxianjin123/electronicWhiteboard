<template>
    <div class="content">
         <div id="hzld" ref="hzld"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           timearr:[], //时间数组
            cyarr:[],//出院人数
            zcarr:[],//转出人数
            ryarr:[],//入院人数
            zrarr:[],//转入人数
            ymix:'',//Y轴最大值
        };
    },
    props:{
        hzld:{},
    },
    watch: {
        hzld() {
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
            var arr = Object.values(this.hzld);
            for(let j=0;j<arr.length;j++){
                this.cyarr.push(arr[j][0]);
                this.ryarr.push(arr[j][1]);
                this.zrarr.push(arr[j][2]);
                this.zcarr.push(arr[j][3]);
            };
            this.cyarr=this.dataarr(this.cyarr);//出院数组
            this.ryarr=this.dataarr(this.ryarr);//入院
            this.zrarr=this.dataarr(this.zrarr);//转入
            this.zcarr=this.dataarr(this.zcarr);//转出
            var maxmum=[Math.max(...this.cyarr),Math.max(...this.ryarr), Math.max(...this.zrarr),Math.max(...this.zcarr)];//出院 入院 转出 转入 最大值数组
            this.ymix=Math.max(...maxmum)/10+1;
            this.ymix = parseInt(this.ymix)*10;
           var arr2= Object.keys(this.hzld);//对象变成时间数组
            for (let i=0;i<arr2.length;i++ ){
                arr2[i]=arr2[i].substr(5,5)
            }
            this.timearr=arr2;
            this.hzld1();
        },
        hzld1(){
       const chart = this.$refs.hzld;
        var myChart = this.$echarts.init(hzld);
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['出院人数','转出人数' ,'入院人数', '转入人数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.timearr,
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: { //控制x轴刻度。
                    show: true, //不显示刻度。
                    inside: true, //代表刻度的小尖尖朝内还是朝外。
                },
            },
            yAxis: [{
                // show: true,
                // offset: 40,
                type: "value",
                position: "left", //原来y轴可以放在left，right两个位置。
                min: 0, //刻度尺最小单位。
                max: this.ymix, //刻度尺最大单位。
                interval: this.ymix/10, //强制分割单位。
                
            }],
            series: [
                {
                    name: '出院人数',
                    type: 'line',
                    data: this.cyarr
                    // data: [2,1,8,1,1,8,1]
                },
                {
                    name: '入院人数',
                    type: 'line',
                    data: this.ryarr
                    // data: [8,1,2,3,5,7,3]
                },
                {
                    name: '转入人数',
                    type: 'line',
                    data: this.zrarr
                    // data: [2,3,5,1,3,6,1]
                },
                {
                    name: '转出人数',
                    type: 'line',
                    data: this.zcarr
                    // data: [2,3,5,8,3,6,1]
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
        height: 300px;
        padding: 10px;
        /* border:1px solid red; */
    }
    #hzld {
        width: 420px;
        height: 290px;
    }
</style>