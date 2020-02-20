<template>
  
      <div class="main">
        <div class="title">
          <p style="text-align:center">BorderLand</p>
        </div>
        <p style="text-align:center" class="motto">为了无上的价值</p>

        <div class = 'block'>
          <NavBar></NavBar>
          <router-view></router-view>
        </div>
      </div>
    
</template>

<script>
import NavBar from "./NavBar.vue";
import ListArticle from "./ListArticle.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavBar,
    ListArticle
  },

  mounted() {
    //this.$router.push({ path: '/listarticle' });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.title {
  align-content: center;
  font-size: 30;
}

.title {
  margin: 100px auto 0 auto;
  width: 150px;
  height: 40px;
  background-color: black;
  color: white;
  line-height: 40px;
  font-size: 18px;
}

.motto {
  color: gray;
  font-size: 14px;
}

.block{

}

</style>
