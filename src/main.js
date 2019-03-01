import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

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
