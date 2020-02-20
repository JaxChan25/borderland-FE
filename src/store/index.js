import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store= new Vuex.Store({
    state:{
        articleID:0
    },
    mutations:{
        changeArticleID(state,param){
            state.articleID = param
        }
    }
})

export default store;