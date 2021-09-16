<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="Activity name">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="Activity zone">
      <a-select v-model="form.region" placeholder="please select your zone">
        <a-select-option value="shanghai"> Zone one </a-select-option>
        <a-select-option value="beijing"> Zone two </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="Activity time">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-model-item>
    <a-form-model-item label="Instant delivery">
      <a-switch v-model="form.delivery" />
    </a-form-model-item>
    <a-form-model-item label="Activity type">
      <a-checkbox-group v-model="form.type">
        <a-checkbox value="1" name="type"> Online </a-checkbox>
        <a-checkbox value="2" name="type"> Promotion </a-checkbox>
        <a-checkbox value="3" name="type"> Offline </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item label="Resources">
      <a-radio-group v-model="form.resource">
        <a-radio value="1"> Sponsor </a-radio>
        <a-radio value="2"> Venue </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="Activity form">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> Create </a-button>
      <a-button style="margin-left: 10px"> Cancel </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        id: null,
        zyh: "3133201907285020",
        brxm: "",
      },
    };
  },
  methods: {
    onSubmit(form) {  
    var query=this.$route.query;
    this.form.brxm=query.user_id;
    console.log(this.form);
    var userId = this.form.brxm;
    console.log(localStorage[userId])
    this.axios
      .post("http://benben.cn.utools.club/api/Forms/savePgTabYcpg", this.form,{
         headers: {
          "content-type": "application/json",
          "Authorization":'Bearer '+ localStorage[userId] //token换成从缓存获取
        }
      }).then((res) => {
        console.log(res);
         
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>