import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

import HomeComponent from '../pages/home/index.vue'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'

export default new router({
     routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',component:HomeComponent},
         {path:'/member',component:MemberComponent},
         {path:'/shopcar',component:ShopcarComponent},
         {path:'/search',component:SearchComponent},
         {path:'/home/newsList',component:newsListComponent},
         {path:'/home/newsInfo/:id',component:newsInfoComponent},
     ],
     linkActiveClass:'mui-active'
 })
