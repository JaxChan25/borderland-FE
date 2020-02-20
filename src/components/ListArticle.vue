<template>
  <div>
    <div class="block">


      <div
        class="articleCard"
        v-for="(article) in articleObj"
        :key="article.id"
        @click="showArticleMethod(article)"
      >
        <el-card class="box-card" shadow="hover">

          <p class="title" >{{article.title}}</p>


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
          <p class="introduction">{{article.introduction}}</p>

        </el-card>
      </div>
    

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[2, 4, 10]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import * as API from "@/api/article/";
export default {
  name: "ListArticle",
  data() {
    return {
      article: {
        id: "",
        title: "",
        introduction: "",
        content: "",
        catalog: "",
        view: "",
        like: "",
        created_at: ""
      },
      articleObj: [],
      total:0,
      start:0,
      limit:2,
    };
  },

  methods: {
    handleSizeChange(val){
      this.limit = val;
      this.getArticlesMethod();
    },
    handleCurrentChange(val){
      this.start = this.limit * (val-1);
      this.getArticlesMethod();
    },

    getArticlesMethod() {
      API.getArticles(this.start,this.limit,this.$route.params.catalog)
        .then(res => {
          if (res.code == 0) {
            this.articleObj = res.data.items;
            this.total = res.data.total;
          } else {
            this.$notify.error({
              title: "后端错误",
              message: res.msg
            });
          }
        })
        .catch(err => {
          this.$notify.error({
            title: "网络错误",
            message: err
          });
        });
    },
    showArticleMethod(article) {
      this.$router.push({name:'article',params:{articleID:article.id}})
  },

  },
  mounted() {
    this.getArticlesMethod();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
  margin: 0 19% 0 19%;
}

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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.articleCard {
  margin: 20px 0 0 0;
  text-align:center;
  cursor:pointer;
}

.sub {
  font-size: 13px;
  color: #99a9bf;
  margin:0 0 50px 0
}
.maintitle {
  font-family: "YouYuan";
  font-size: 14px;
  color: plum;
}

.el-pagination{
  margin:20px
}

.title{
  font-family: "Microsoft YaHei";
  font-weight:bold;
  font-size:30px;
  letter-spacing:2px
}

.introduction{
letter-spacing:1px;
line-height:200%;
margin:60px 0 100px 0;
}

</style>
