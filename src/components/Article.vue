<template>
<div id="content" v-html="article.content" class="article-detail"></div>
</template>

<script>

import markdown from "../utils/markdown"
import * as API from "../api/article/"

export default {
  name: '',
  data() {
    return {
      id:1,
      article:{
        content:'<h3>测试</h3>',
        toc:''
      } ,
      testMark :'# Marked in the browser\n\nRendered by **marked**.'
    }
  },

  methods: {
    getArticleMethod() {
      // console.log(this.id)
      API.getArticle(this.id).then( (res)=>{
        if(res.code>0){
            this.$notify.error({
              title: '错误1',
              message:  res.msg
            });

        }else{
            this.$notify({
            title: '成功',
            message: `您的查看ID为${res.data.id}`,
            type: 'success'
              });

   
            var p = markdown.marked(res.data.content)
            p.then((val) => {
              this.article.content = val.content;
              this.article.toc = val.toc;
            });

        }
      }).catch((error)=>{
              this.$notify.error({
              title: '错误2',
              message:  error
            });
      })
        
    }
  },
  mounted(){
    this.getArticleMethod()
  }
}

</script>


<style>

</style>
