<template>
    <div>
        <template v-for="i in showItem">
            <a-button type="danger" v-if="i.isShow" shape="circle" icon="" size="small" :style="i.style" :key="i.title">{{i.title}}</a-button>
        </template>
    </div>
</template>

<script>
export default ({
    data:()=>{
        return {
            showItem:[
                {name:'xr',isShow:false,title:'新',style:''},
                {name:'cy',isShow:false,title:'出',style:''},
                {name:'zr',isShow:false,title:'转入',style:'border-radius:13px;letter-spacing: -3px;padding: 0 3px;'},
                {name:'zc',isShow:false,title:'转出',style:'border-radius:13px;letter-spacing: -3px;padding: 0 3px;'},
                {name:'ss',isShow:false,title:'术',style:''},
                {name:'bz',isShow:false,title:'危',style:''},
                {name:'bw',isShow:false,title:'重',style:''},
                {name:'fm',isShow:false,title:'娩',style:''},
                {name:'sw',isShow:false,title:'亡',style:''},
                {name:'yjhl',isShow:false,title:'一',style:''},
                {name:'tjhl',isShow:false,title:'特',style:''},
            ]
        }
    },
    props:{
        datazyh:String,
    },
    
    methods:{
        async parentHandleclick(v){
            const res= await this.$axios.get("/han/PatientRelated/GetPatientState/"+v)
            if(res.result){
                for(var i in res.result[0]){
                    for(var f in this.showItem){
                        if(this.showItem[f].name==i){
                            this.showItem[f].isShow=res.result[0][i]
                        }  
                    }
                }
            }
        }
    },
    mounted(){
        if(this.datazyh){
            this.parentHandleclick(this.datazyh);
        }
    },
})
</script>
<style scoped>
.ant-btn-danger{
  background:orange;
  border-color: orange;
  margin-left: 3px;
}
</style>
