import Vue from 'vue'
import App from './App'
import moment from 'moment'

Vue.config.productionTip = false

import router from './router/index.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import './css/common.less'

Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:MM:SS'){
  return moment(dataStr).format(pattern)
})

Vue.http.options.root='http://www.lovegf.cn:8899/'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
