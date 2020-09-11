// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
