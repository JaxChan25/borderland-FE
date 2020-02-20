import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import vueClapButton from 'vue-clap-button'

import VueRouter from 'vue-router'
import routes from './routers'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(vueClapButton);
 

const router = new VueRouter({
  routes
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
