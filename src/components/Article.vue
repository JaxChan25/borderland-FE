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
     articleID:this.$route.params.articleID,
      article:{
        content:'<h3>请尊贵的客人等待一会...</h3>',
        toc:''
      } ,
      testMark :'# Marked in the browser\n\nRendered by **marked**.'
    }
  },


  methods: {
    getArticleMethod() {
      
      if (this.articleID==undefined){
        this.articleID = this.$store.state.articleID
      }
    
      API.getArticle(this.articleID).then( (res)=>{
        if(res.code>0){
            this.$notify.error({
              title: '错误1',
              message:  res.msg
            });

        }else{
            // this.$notify({
            // title: '成功',
            // message: `您的查看ID为${res.data.id}`,
            // type: 'success'
            //   });

   
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
/*对 markdown 样式的补充*/
pre {
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #abb2bf;
    background: #282c34;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
}
h1,h2,h3,h4,h5,h6{
    margin-top: 1em;
    /* margin-bottom: 1em; */
}
strong {
    font-weight: bold;
}

p > code:not([class]) {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
}
p img{
    /* 图片居中 */
    margin: 0 auto;
    display: flex;
    transform: scale(0.8)
}



#content .desc ul,#content .desc ol {
    color: #333333;
    margin: 1.5em 0 0 25px;
}

#content .desc h1, #content .desc h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

#content .desc a {
    color: #009a61;
}

#content{
  font-family: "Microsoft JhengHei" ,"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  font-size: 18px;
  line-height: 30px;
}
</style>
