<template>

<Article :articleID="contactID"></Article>

</template>

<script>
import Article from './Article.vue'
export default {
  name: 'Contact',
  data() {
    return {
      contactID:1
    }
  },
  components: {
    Article
  },
  mounted(){
    this.$store.commit('changeArticleID',this.contactID)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
