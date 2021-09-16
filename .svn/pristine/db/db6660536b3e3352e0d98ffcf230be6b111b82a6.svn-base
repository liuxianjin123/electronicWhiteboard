<template>
    <div style="height: 550px;font-size: 16px;">
        <div class="fz">
            <!-- {{dataList}} -->
            <span class="xin"> * </span>
             分组名称： <input type="text" v-model="group_name" @input="input_blur($event)"  placeholder="请输入分组名称" name="group_name">
            <span style="margin-left: 10px;" v-if="isTips">
                <a-icon type="check-circle" style="color:#77d14a;" />
            </span> 
            <span style="margin-left: 10px;" v-else>
                <a-icon type="close-circle" style="color:red;"/> {{wrong}}
            </span> 
        </div>

        <div class="fz">
            <span class="kon">组员:</span>
            <input type="text" placeholder="请选择人员名称" v-model="value" disabled name="personnel" >
        </div>
        <div class="personnels">
            <div v-for="(groupMembers,index) in dataList.groupMembers" :key="index">
                <input type="checkbox" name="vehicle" v-model="value" :value="groupMembers.userName" @click="oncheckbox(groupMembers.userName,groupMembers.userCode,groupMembers.id)" :checked="groupMembers.isExist" />{{groupMembers.userName}}
            </div>
            <!-- <div>
                <input type="checkbox" name="vehicle" value="Car" checked="checked" /> 度假酒店
            </div> -->
            <!-- <a-checkbox-group style="" @change="onChange" v-model="value" :value="['Pear2']" name="checkboxgroup" slot="value" :options="options"/> -->
        </div>
        <div class="Tube">
            <span class="kon" @click="EditSave()">管床:</span>
            <div class="Tube_bed">
                 <a-transfer
                    :titles="Tubetitles"
                    :data-source="mockData"
                    :list-style="{
                    width: '46%',
                    height: '220px',
                    }"
                    :target-keys="targetKeys"
                    :render="renderItem"
                    @change="handleChange"
                    @selectChange="clickoptions"
                />
            </div>
        </div>




    </div>
</template>
<script>
// 差树形选择，其他已经完善
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { post, get }from '../../../request/request';
export default {
    data(){
    return{
       zhCN,
       wrong:'请输入分组名称' ,
       isTips:false,//输入提示是否显示
       group_name:'默认责任组',//分组名称
       group_id:null,//编辑时id
       beds:[],//原始床数组
       nowbeds:[],//床位传输值
       groupMembers:[],//改变后人员名称
       editdataList:[],//获取数据
       value:[],//选中人员名称
       mockData: [],
       targetKeys: [],
       Tubetitles:['未选','已选'],//穿梭框标题
       preservation:[],
       
      
     
    }
    },
    computed: {
        
    },
    props:{
        dataList:{}
    },
    watch:{
       'dataList.id': {
        handler(newName, oldName) {
           this.morenshuj();
        //    this.funpreservation();
           
        // console.log(newName, oldName)
        },
        deep: true,
        immediate: true
        }
    },
    methods: {
        morenshuj(){
            this.groupMembers=[];
            this.beds=[];
            this.value=[];
            this.ditdataList=this.dataList;
            this.group_id=this.ditdataList.id?this.ditdataList.id:null;
            this.group_name=this.ditdataList.groupName?this.ditdataList.groupName:'';
            // this.groupMembers=this.ditdataList.groupMembers;
            // this.beds=this.ditdataList.beds;
            for(let i = 0; i < this.dataList.groupMembers.length; i++){
                if(this.dataList.groupMembers[i].isExist){
                    this.value.push(this.dataList.groupMembers[i].userName);
                }
            }
            this.group(this.dataList.beds,20)//分割数组
            console.log(this.group(this.dataList.beds,20))
            // console.log(this.dataList)
            const targetKeys = [];
            const mockData = [];
            for (let i = 0; i < this.dataList.beds.length; i++) {
                const data = {
                key: this.dataList.beds[i].bedId.toString(),
                title: `${this.dataList.beds[i].bedName}床`,
                id:this.dataList.beds[i].id,
                bedNumber:this.dataList.beds[i].bedNumber,
                bedOrderNumber:this.dataList.beds[i].bedOrderNumber.toString(),
                // description: `description of content${i + 1}`,
                // chosen: Math.random() * 2 > 1,
                };
                if (this.dataList.beds[i].isExist) {
                 targetKeys.push(data.key);
                 this.beds.push(data.key);
                }
                mockData.push(data);
            }

            this.mockData = mockData;
            this.targetKeys = targetKeys;
        },
        input_blur(event){
            if(event.currentTarget.value.length>1){
                this.isTips=true;
            }else{
                this.wrong='请输入两个字及以上分组名称';
                this.isTips=false;
            }
        },
        oncheckbox(name,code,id) {//选中复选框
                // console.log(name,code,id);
                if(this.groupMembers.length>0){
                    for (let i = 0; i < this.groupMembers.length; i++) { 
                        if(this.groupMembers[i].userCode==code){
                            this.groupMembers.splice(i,1);
                            return;
                        }else{
                             this.groupMembers.push({'id':id,'userCode':code,'userName':name});
                            // console.log('ssss')
                            return;
                        }
                    }
                }else{
                    this.groupMembers.push({'id':id,'userCode':code,'userName':name});
                    return;
                }
                
                
                
                // this.value.push(name);
            // console.log('checked = ', checkedValues);
            // console.log('value = ', this.value);
            // console.log(this.options[0].value);
            
        },
        group(array, subGroupLength) {//数组，分割长度  分割数组，生成新数组
            let index = 0;
            let index1 = 0;
            let newArray = [];
            while(index < array.length) {

                newArray.push({'children':array.slice(index, index += subGroupLength),bedName:index1+'床——'+index+'床'});
                index1=index1+subGroupLength;
            }
            return newArray;
        },
        getArrDifference(arr1, arr2) {//比对数组值取出不同的值
            return arr1.concat(arr2).filter(function(v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
            });
        },
        renderItem(item) {
            const customLabel = (
                <span class="custom-item">
                {item.title}
                </span>
            );

            return {
                label: customLabel, // for displayed item
                value: item.key, // for title and filter matching
            };
        },
        handleChange(targetKeys, direction, moveKeys) {//点击穿梭框转移键
            // console.log(targetKeys, direction, moveKeys);
            this.targetKeys = targetKeys;            
        },
        clickoptions(sourceSelectedKeys, targetSelectedKeys){//点击床位复选框
            // console.log(sourceSelectedKeys, targetSelectedKeys);
            // const beds = [];


        },
       async EditSave(){//保存
            this.preservation=[];
            this.nowbeds=this.getArrDifference(this.beds, this.targetKeys);
            let newArr = [];//根据bedId获取其他数据
            for (let i = 0; i < this.nowbeds.length; i++) {
                for (let j = 0; j < this.dataList.beds.length; j++) {
                    if(this.dataList.beds[j].bedId == this.nowbeds[i]){
                        newArr.push(this.dataList.beds[j]);
                    }
                }
            }
            // console.log(newArr);
            this.preservation.push({id:this.group_id,groupName:this.group_name,groupMembers:this.groupMembers,beds:newArr});
            console.log(this.preservation);
            const res = await post('/han/handover/saveGroup',this.preservation[0]);
            // console.log(res);
            if(res.result){
                this.$message.success('保存成功！');
            }else{
                this.$message.warning(res.msg);
            }
            
            // console.log( this.beds);
            // console.log(this.targetKeys);
            //  console.log(this.nowbeds);
            // console.log( this.groupMembers);
        },

       


    }
    
}
</script>
<style scoped>
.xin{
    float: left;
    font-size: 25px;
    color: #CC0000;
}
.kon{
    margin-left: 15px;
    letter-spacing: 13px
}
.fz{
    height: 50px;
    line-height: 50px;
}
input[type='text']{
    width: 50%;
    height: 40px;
    border: 1px solid #ccc;
    text-shadow: none;
    outline-style: none;
    border-radius: 5px;
}
.personnels{
   width: 80%;
   height: 150px;
   margin-left: 8.5%;
   margin-top: 2%;
   border: 1px solid #ccc;
   border-radius: 5px;
   overflow: auto;
   padding: 15px;
}
.personnels>>>.ant-checkbox-group-item{
    width: 15%;
    margin-top: 5px;
}
.usage{
    width: 50%;
    display: inline-block;
}
.Tube{
    margin-top:20px;
}
.Tube_bed{
    width: 80%;
    height: 249px;
    margin-left: 8.5%;
    /* margin-top: 2%; */
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    padding: 10px;
}
.tree-transfer .ant-transfer-list:first-child {
  width: 50%;
  flex: none;
}
.personnels>div{
    display: inline-block;
    width: 15%;
    
}
</style>