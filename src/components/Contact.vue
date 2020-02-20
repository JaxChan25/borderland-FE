<template>



</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      contactID:1
    }
  },
  components: {
   
  },
  mounted(){
    this.$router.push({name:'article',params:{articleID:this.contactID}})
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
