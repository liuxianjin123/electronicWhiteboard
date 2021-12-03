<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row>
      <a-col :span="12">
        <a-form-model-item label="工号">
          <a-input type="number" v-model="form.id" />
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item label="姓名">
          <a-input v-model="form.name" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-form-model-item label="职位">
          <a-input v-model="form.zw" />
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item label="职称">
          <a-input v-model="form.zc" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-form-model-item label="工龄">
          <a-input type="number" v-model="form.gl" />
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item label="短号">
          <a-input v-model="form.tel" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-form-model-item label="联系方式">
          <a-input type="number" v-model="form.phone" />
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item label="身份">
          <a-input v-model="form.sf" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-form-model-item label="负责患者">
          <div style="width: 200%">
            <span v-for="(i, index) in form.fzhz" :key="index" :value="i.id"
              >&nbsp;{{ i.name }}&nbsp;</span
            >
          </div>

          <!-- <a-input v-model="form.jjbstart" /> -->
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        id: "",
        name: "",
        zw: "",
        zc: "",
        gl: null,
        tel: "",
        phone: null,
        sf: "",
        fzhz: [],
      },
    };
  },

  methods: {
    getaddargl(arr) {
      //获取数据
      if (arr) {
        this.form = arr;
      } else {
        this.form = {
          id: "",
          name: "",
          zw: "",
          zc: "",
          gl: null,
          tel: "",
          phone: null,
          sf: "",
          fzhz: [],
        };
      }
      console.log(arr);
    },
  },
};
</script>
<style scoped></style>
