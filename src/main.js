import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'view-design/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';
import intelComp from './components/index'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(intelComp)
Vue.use(ViewUI)
Vue.prototype.$echarts = echarts

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
