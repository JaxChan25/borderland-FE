<template>
<div>
  <el-menu class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/listarticle">
      <i class="el-icon-s-home"></i>home
    </el-menu-item>
    <el-menu-item index="/catalog">
      <i class="el-icon-menu"></i>catalog
    </el-menu-item>
    <el-menu-item >
      <i class="el-icon-s-promotion"></i>contact
    </el-menu-item>
    <el-menu-item index="/archives">
      <i class="el-icon-s-flag"></i>Archives
    </el-menu-item>
    <el-menu-item index="/activity">
      <i class="el-icon-s-help"></i>activity
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-demo{
  padding-left : 13% !important;
  margin: 0 18% 0 18%
}
</style>
