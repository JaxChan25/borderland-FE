<template>
  <div class="main">
    <h3>1 categories in total</h3>
    <div class="categories" router>
        <p v-for="(item,index) in CatalogList":key="item">{{item}}</p>
    </div>
    
  </div>
</template>

<script>
import * as API from "../api/article/"
export default {
  name: 'Catalog',
  data() {
    return {
      CatalogList:[]
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
        }
      }).catch((error)=>{
              this.$notify.error({
              title: '错误2',
              message:  error
            });
      })

    },
    go(){
      this.$router.push({ path: '/IELTS' });
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
  margin: 5px auto;
  text-align: center;
}
.categories a{
  color: darkgray;
  text-decoration: none;
}
.categories a:hover{color: plum;}
</style>
