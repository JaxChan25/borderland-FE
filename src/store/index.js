import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store= new Vuex.Store({
    state:{
        articleID:0
    },
    mutations:{
        changeArticleID(state,articleID){
            state.articleID = articleID
        }
    }
})

export default store;