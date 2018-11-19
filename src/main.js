import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import router from './router/index.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import './css/common.less'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
