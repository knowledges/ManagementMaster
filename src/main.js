import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

import '@/styles/index.scss' // global css

import BaiduMapBusiness from 'vue-baidu-map-business'
import Album from 'vue-pop-album'
import 'vue-pop-album/dist/vue-pop-album.css'
import App from './App'
import router from './router'
import store from './store'
console.log(Album)
import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { zhLocale })
Vue.use(BaiduMapBusiness, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'axUsKS7GkUqaFhjBq7DvTWR9pPCGFqhW'
})
Vue.use(Album, {})

Vue.config.productionTip = false

const errorHandler = (error, vm, info) => {
  console.error('全局异常')
  console.error(error)
  console.error(info)
}
Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
