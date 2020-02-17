<template>
  <div class="main">
    <h2>If you don't speak English! <br>Go home!</h2>
    
    <el-button type="info" plain @click="goBack" style="float:right;">Back</el-button>
  </div>
</template>

<script>
export default {
  name: 'IELTS',
  data() {
    return {
      
    }
  },
  methods:{
    goBack(){
      this.$router.push({ path: '/catalog' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 800px;
  margin: 5px auto;
  text-align: center;
}
</style>
