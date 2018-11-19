import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

import HomeComponent from '../pages/home/index.vue'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'

export default new router({
     routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',component:HomeComponent},
         {path:'/member',component:MemberComponent},
         {path:'/shopcar',component:ShopcarComponent},
         {path:'/search',component:SearchComponent}
     ],
     linkActiveClass:'mui-active'
 })
