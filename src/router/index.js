import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

import HomeComponent from '../pages/home/index.vue'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListComponent from '../pages/photoList'
import photoInfoComponent from '../pages/photoInfo'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDescComponent from '../pages/goodsInfo/goodsDesc.vue'
import goodsCommentComponent from '../pages/goodsInfo/goodsComment.vue'

export default new router({
     routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',component:HomeComponent},
         {path:'/member',component:MemberComponent},
         {path:'/shopcar',component:ShopcarComponent},
         {path:'/search',component:SearchComponent},
         {path:'/home/newsList',component:newsListComponent},
         {path:'/home/newsInfo/:id',component:newsInfoComponent},
         {path:'/home/photoList',component:photoListComponent},
         {path:'/home/photoInfo/:id',component:photoInfoComponent},
         {path:'/home/goodsList',component:goodsListComponent},
         {path:'/home/goodsInfo/:id',component:goodsInfoComponent,name:'goodsInfo'},
         {path:'/home/goodsDesc/:id',component:goodsDescComponent,name:'goodsDesc'},
         {path:'/home/goodsComment/:id',component:goodsCommentComponent,name:'goodsComment'},
     ],
     linkActiveClass:'mui-active'
 })
