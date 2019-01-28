import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log(to.path)
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      /* TODO 這裡的权限2中处理方式：1.使用本地 2.试试读取同步到本地；用户信息同理，这种一般不会时时改变所以采用本地数据就可以了 */
      if (store.getters.powers.length === 0) {
        store.dispatch('GetPowerTree')
          .then(route => {
            /* router  数组的插入 新的元素 */
            var array = []
            route.forEach(item => {
              if (Array.isArray(item.children) && item.children.length > 0) {
                array = array.concat(item.children)
              }
            })
            router.addRoutes(array)
            /* 注：刷新不找路由的问题 */
            next({ path: to.path })
          })
          .catch(error => { console.error(error) })
      }
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=/`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
