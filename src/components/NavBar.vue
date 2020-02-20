<template>
<div class="block">
  <el-menu class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/listarticle">
      <i class="el-icon-s-home"></i>Home
    </el-menu-item>
    <el-menu-item index="/catalog">
      <i class="el-icon-menu"></i>Catalog
    </el-menu-item>
    <el-menu-item index="/contact" >
      <i class="el-icon-s-promotion"></i>Contact
    </el-menu-item>
    <el-menu-item index="/archives">
      <i class="el-icon-s-flag"></i>Archives
    </el-menu-item>
    <el-menu-item index="/activity">
      <i class="el-icon-s-help"></i>Activity
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
.block{
  margin: 0 19% 0 19%;
}
.el-menu{
padding-left: 15%
}
</style>
