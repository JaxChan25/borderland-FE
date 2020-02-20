<template>
  <div class="main">
    <h1>{{total}} categories in total</h1>

    <div
      class="categories"
      v-for="(catalog) in CatalogList"
      :key="catalog"
      @click="listArticlesByCatalogMethod(catalog)" router
    >

    <a href="#" >{{catalog}}</a>
    </div>

    
  </div>
</template>

<script>
import * as API from "../api/article/"
export default {
  name: 'Catalog',
  data() {
    return {
      CatalogList:[],
      total:""
    }
  },
  methods:{
    getCatalogMethods(){
      API.getCatalogs().then( (res)=>{
        if(res.code>0){
            this.$notify.error({
              title: '错误1',
              message:  res.msg
            });

        }else{
          this.CatalogList  = res.data.items
          this.total = res.data.total
        }
      }).catch((error)=>{
              this.$notify.error({
              title: '错误2',
              message:  error
            });
      })

    },
    listArticlesByCatalogMethod(catalog){
      this.$router.push({name:'listarticle',params:{catalog:catalog}});
    }
  },
  mounted(){
    this.getCatalogMethods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 800px;
  margin: 100px auto;
  text-align: center;
}
.categories a{
  color: darkgray;
  text-decoration: none;
  font-size :18px
}
.categories{
  margin:10px
}

.categories a:hover{color: plum;}
</style>
