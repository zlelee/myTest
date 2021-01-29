import Vue from 'vue'
import App from './App.vue'
import router from './router'

//导入全局的css(公共样式)
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import './plugins/element.js'
import axios from 'axios'
axios.defaults.baseURL = `http://127.0.0.1:8888/api/private/v1/`
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
