import Vue from 'vue'
import App from './App'
import moment from 'moment'

Vue.config.productionTip = false

import router from './router/index.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// import VuePreview from 'vue2-preview'
// Vue.use(VuePreview)

import VuePreview from 'vue-preview'

Vue.use(VuePreview)

// import { Header,Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import './css/common.less'

Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:MM:SS'){
  return moment(dataStr).format(pattern)
})

Vue.http.options.root='http://www.lovegf.cn:8899/'
Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
