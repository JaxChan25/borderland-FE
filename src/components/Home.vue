<template>
  <div class="main">
    <div class="title">
      <span>borderland</span>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>home
          </el-menu-item>
        
          <el-menu-item index="2">
            <i class="el-icon-user-solid"></i>about
          </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import About from "./About.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components:{
    About
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: auto;
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
  line-height: 30px;
}
.nav {
  width: 209px;
  margin: 10px auto;
}

</style>
