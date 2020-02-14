<template>
  <div class="main">
    <div class="title">
      <span>borderland</span>
    </div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components:{
    NavBar
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
