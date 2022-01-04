import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http  from './utils/requst'
console.log('http',http)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = http

console.log(process.env)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
