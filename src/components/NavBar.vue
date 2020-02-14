<template>
  <el-menu class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>home
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-user-solid"></i>about
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-user-solid"></i>article
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
