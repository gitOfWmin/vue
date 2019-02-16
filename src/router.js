import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import home from './components/home.vue';
import collage from './components/collage.vue';
import member from './components/member.vue';
import order from './components/order.vue';
import detail from './components/detail.vue';
import error from './components/error.vue';
import address from './components/address.vue';
import addAddress from './components/addAddress';
import login from './components/login.vue';
import reg from './components/reg.vue';


let routes=[
    {path:'/home',component:home},
    {path:'/collage',component:collage},
    {path:'/member',component:member},
    {path:'/order',component:order},
    {path:'/address',component:address},
    {path:'/addAddress',component:addAddress},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {name:'detail',path:'/detail/:id',component:detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
];

export default new Router({
    routes
})