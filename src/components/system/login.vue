<template>
  <div class="container">
    <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" class="forms">
      <div class="titles">
        <h2>互慧护理交接班管理系统</h2>
        <h3>HuHui Nursing comprehensive management platform</h3>
      </div>
      <a-form-model-item has-feedback label="" prop="user">
        <a-input
          v-model="ruleForm.Account"
          type="text"
          autocomplete="off"
          size="large"
        >
          <a-icon slot="prefix" type="user" style="color:#1e9fff" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback label="" prop="pwd">
        <a-input
          v-model="ruleForm.Password"
          :type="password"
          autocomplete="off"
          size="large"
        >
          <a-icon slot="prefix" type="lock" style="color:#1e9fff" />
          <a-tooltip slot="suffix">
            <a-icon
              :type="password == 'password' ? 'eye' : 'eye-invisible'"
              @click="
                password == 'password'
                  ? (password = 'text')
                  : (password = 'password')
              "
            />
          </a-tooltip>
        </a-input>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 24 }">
        <a-button
          type="primary"
          @click="submitForm('ruleForm')"
          block
          style="height:40px"
        >
          <a-icon :type="loads" />登 录
        </a-button>
      </a-form-model-item>
      <a href="javascript:;" class="bg"
        >CopyRight©2021 四川互慧软件有限公司,All CopyRights Reserved</a
      >
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    let users = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    let pwds = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loads: "",
      password: "password",
      ruleForm: {
        Account: "0",
        Password: "1234"
      },
      rules: {
        Account: [{ validator: users, trigger: "change" }],
        Password: [{ validator: pwds, trigger: "change" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.loads = "loading";
          // const res=await  post('/Api/FormHandler.ashx/IsLogin',this.ruleForm);
          // if(res.code==0&& res.result){
          //   console.log(res)
          //   sessionStorage.zyh='0823202105159233',
          //   sessionStorage.userName='黄秀兰'
          //   sessionStorage.user='0225'
          //   sessionStorage.keys=res.result.key;
          //   sessionStorage.value=res.result.value;
          let routerPath = null;
          if (this.ruleForm.Account == 0) {
            routerPath = "/Board";
          } else if (this.ruleForm.Account == 1) {
            routerPath = "/jjbIndex";
          }
          this.$router.push({
            path: routerPath,
            query: {
              bqdm: "0005",
              item: 1,
              zyh: "1083202106116367"
            }
          });
          //}
        } else {
          this.$message.error("请输入用户名或密码");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
@import url("../../../static/css/Login.css");
</style>
