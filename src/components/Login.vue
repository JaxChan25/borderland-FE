<template>
  <div>
    <transition>
      <div v-if="flag">
        <div align="center"><img class="logo" src="../assets/logo.png" id="logo" /></div>
        <h3 class="title">欢迎来到Borderland</h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="9">
            <div class="input">
              <el-input v-model="form.user_name" placeholder="请输入账号"></el-input>
            </div>
          </el-col>
          <el-col :span="6" :offset="9">
            <div class="input">
              <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
            </div>
          </el-col>
          <el-col :span="6" :offset="9">
            <el-button type="primary" class="button" @click="loginMethod">登录</el-button>
          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>

<script>
import * as API from '@/api/user/';

export default {
  name: "login",
  data() {
    return {
      form:{
        user_name: "",
        password: "",
      },
      flag: false,
      show: true
    };
  },
  methods: {
    loginMethod() {
      console.log("click");
      API.requestLogin(this.form)
        .then(res => {
          if (res.code == 0) {
            this.$notify({
              title: "登录成功",
              message: `欢迎您，${res.data.user_name}`,
              type: "success"
            });
            this.$router.push({ path: '/home' });
          } else {
            this.$notify.error({
              title: "登录失败",
              message: "账号或密码错误"
            });
          }
        })
        .catch(err => {
          this.$notify.error({
              title: "网络错误",
              message:'',
            });
        });
    }
  },
  mounted() {
    this.flag = !this.flag;
  }
};
</script>

<style scoped>
.title {
  margin: 0px auto 15px auto;
  text-align: center;
  color: #505458;
}

.input {
  margin: 0 0 10px 0;
}

.button {
  width: 100%;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 1.5s ease;
}


</style>