import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入全局的css(公共样式)
import './assets/css/global.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
