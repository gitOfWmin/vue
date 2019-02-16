import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from "axios";
Vue.prototype.$http = axios;

//动画的配置
import 'animate.css';

import './assets/css/base.css'
import './assets/css/icon.css'
import './assets/css/home.css'
// import './assets/js/jquery.min'
import './assets/js/touchSlider'

// import './assets/js/layer'
import './assets/js/address'
import './assets/js/city'


import loading from './components/loading'
Vue.component("loading",loading)

//请求拦截
axios.interceptors.request.use(function (config) {
  // 发送请求成功时，拦截，做点事，config=请求时的配置
  vm.$data.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  vm.$data.bLoading=false
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

//状态管理
// import './store'


let vm = new Vue({
  data:{
    title:'',
    topS:true,
    bottomS:true,
    bLoading:true
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
