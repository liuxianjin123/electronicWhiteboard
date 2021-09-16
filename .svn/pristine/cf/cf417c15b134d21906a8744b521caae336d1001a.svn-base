<template>
    <div class="gb" style="height:100%;width:100%">
        <a-button icon="el-icon-tickets" @click="CreateChart"> {{msg}}</a-button>
        <div ref="chart" style="height:500px;width:100%">
            
        </div>
    </div>
</template>
<script>
export default {
    name:'Echarts'
    ,data(){
        return{
            msg:'Echarts'
        }
    },
    methods:{
        CreateChart(){
            console.log(this.$echarts)
            const chart = this.$refs.chart
            var myChart = this.$echarts.init(chart);
            var option = {
			  title: {
				  text: 'ECharts 入门示例'
			  },
			  tooltip: {},
			  legend: {
				  data:['销量']
			  },
			  xAxis: {
				  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			  },
			  yAxis: {},
			  series: [{
				  name: '销量',
				  type: 'bar',
				  data: [5, 20, 36, 10, 10, 20]
			  }]
		    };
		    if (option && typeof option === "object") {
                console.log("开始渲染")
                myChart.setOption(option, true);
            } 
            window.onresize=function(){
                myChart.resize();
            };
        }
    },
    created() {
        let a = null;
        if(a.length > 1) {
            // ...
        }
    }
}
</script>
<style  scoped>
    .gb{
        height:  calc(100% - 55px);
    }
    #ersss{
      
        border:1px solid red;
    }
</style>