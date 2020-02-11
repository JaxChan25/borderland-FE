<template>
<div>
  <div>
 <img alt="Vue logo" src="../assets/logo.png">
  <h3 class="title">欢迎来到Borderland</h3>
  <el-row :gutter="20">
  <el-col :span="6" :offset="9"><div class="input"><el-input v-model="user_name" placeholder="请输入账号"></el-input>  </div></el-col>
  <el-col :span="6" :offset="9"><div class="input"><el-input placeholder="请输入密码" v-model="password" show-password></el-input>  </div></el-col>
  <el-col :span="6" :offset="9"><el-button type="primary" class="button">登录</el-button></el-col>
  </el-row>
  </div>

</div>



</template>

<script>

export default {
  data: () => ({
    show: true
  })
}
</script>

<style>
  .title {
    margin: 0px auto 15px auto;
    text-align: center;
    color: #505458;
  }
  .input{
    margin: 0 0 10px 0
  }
  .button{
    width: 100%;
  }
</style>