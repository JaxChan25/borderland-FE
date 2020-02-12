
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './api/index'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$http = axios

const router = new VueRouter({
  routes
})


new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
