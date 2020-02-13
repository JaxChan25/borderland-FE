<template>

<div v-html="element"></div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      element:'<h3>测试</h3>',
      flag:false,
      show: true
    }
  },
  mounted(){
    this.flag = !this.flag;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.v-enter,
.v-leave-to{
  opacity: 0;
}

.v-enter-active,
.v-leave-active{
  transition: all 2s ease;
}

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
