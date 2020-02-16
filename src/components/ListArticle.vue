<template>
<div>
  <div class="block">
    <el-carousel  height="200px" indicator-position="outside" :interval="8000" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="articleCard" v-for="(article,index) in articleObj" :key="index"  @click="showArticleMethod(index)">
    <el-card class="box-card" shadow="hover">
      {{article.title}}
      {{article.created_at}}
      {{article.catalog}}
      {{article.view}}
      {{article.like}}
      {{article.introduction}}
    </el-card>

    </div>

  
  </div>

  


</div>
</template>

<script>
import * as API from '@/api/article/';
export default {
  name: 'ListArticle',
  data() {
    return {
      article:{
        id:"",
        title:"",
        introduction:"",
        content:"",
        catalog:"",
        view:"",
        like:"",
        created_at:"",
      },
      articleObj:[]
    }
  },
  
  methods: {
    getArticlesMethod() {
      API.getArticles()
        .then(res => {
          if (res.code == 0) {
            this.articleObj = res.data
          } else {
            this.$notify.error({
                title: "后端错误",
                message:res.msg,
              });
          }
        })
        .catch(err => {
          this.$notify.error({
              title: "网络错误",
              message:err,
            });
        });
    },
  },
  showArticleMethod(id){

  },
  mounted(){
    this.getArticlesMethod()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    text-align: center;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .block{

    margin: 5px 15%  15%
  }

  .articleCard{
    margin:20px 0 0 0;
  }
</style>
