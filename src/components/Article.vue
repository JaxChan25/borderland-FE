<template>
<div class="block-2">
<el-container>

  <el-container>
    <el-main>

      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/listarticle' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>

      <h1 class="title">{{article.title}}</h1>


      <div class="sub">
        <span>Posted on {{article.created_at}}</span>
        <el-divider direction="vertical"></el-divider>
        <span>{{article.view}} Views</span>
        <el-divider direction="vertical"></el-divider>
        <span>{{article.like}} Likes</span>
      </div>

      <el-divider content-position="left">
        <span class="maintitle">{{article.catalog}}</span>
      </el-divider>

      <div id="content" v-html="article.content" class="article-detail"></div>
    </el-main>

    <el-aside width="200px">
      <div  v-html="article.toc" class="toc"></div>
    </el-aside>
  </el-container>

  <el-footer>
    <el-divider></el-divider>

    <div class="clap">
      <h3>给我一个小鼓励吧!</h3>
      <vue-clap-button @clap="clap"></vue-clap-button>
    </div>


  </el-footer>

</el-container>


</div>
</template>

<script>

import markdown from "../utils/markdown"
import * as API from "../api/article/"

export default {
  name: '',
  data() {
    return {
     articleID:this.$route.params.articleID,
      article: {
        id: "",
        title: "",
        introduction: "",
        content: "请等等啦",
        catalog: "",
        view: "",
        like: "",
        created_at: "",
        toc:""
      },

    }
  },


  methods: {
    getArticleMethod() {
      
      if (this.$route.params.articleID==undefined){
        this.articleID = this.$store.state.articleID
      }
    
      API.getArticle(this.articleID).then( (res)=>{
        if(res.code>0){
            this.$notify.error({
              title: '错误1',
              message:  res.msg
            });

        }else{


            this.article = res.data
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
        
    },

    clap(clapsCount) {
     
      API.addLike(this.article.id).then( (res)=>{
        if(res.code>0){
            this.$notify.error({
              title: '错误1',
              message:  res.msg
            });

        }else{
         //console.log("点赞成功")
  
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
  },


}

</script>


<style>
.block-2{
 margin:0 5% 0 10%
}
.el-main{
 margin:0 0% 0 10%
}
.clap{
  text-align:center;
}
.clap div{
  margin:0 auto;
}

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

.maintitle {
  font-family: "YouYuan";
  font-size: 14px;
  color: plum;
}

.el-breadcrumb{
 margin:20px 0 0 0
}

.title{
  font-family: "Microsoft YaHei";
  font-weight:bold;
  font-size:45px;
  letter-spacing:3px;
  text-align:center;
  margin:120px 0 30px 0
}

.sub {
  font-size: 13px;
  color: #99a9bf;
  margin:0 0 50px 0;
  text-align:center;
}

.toc{
  position:fixed;
  margin:60px 0 0 0;
  font-family:  "Microsoft JhengHei" ,"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  font-size: 16px;
  color: plum;
  line-height:200%;

}

</style>
