/**
 * Created by qiubaolin on 2019/2/5.
 */
import { getBMAP, setBMAP, rmvBAMP } from '@/utils/map'

const ak = 'axUsKS7GkUqaFhjBq7DvTWR9pPCGFqhW'
const map = {
  state: {
    BMAP: {}
  },
  mutations: {
    SET_BMAP: (state, data) => {
      state.BMAP = data
    }
  },
  actions: {
    MP({ commit, state }) {
      return new Promise((resolve, reject) => {
        var BMAP = getBMAP()
        if (BMAP === null) {
          console.log('hahaha')
          window.onload = function() {
            console.log('i come in')
            // rmvBAMP()
            // setBMAP(JSON.stringify(BMAP))
            // commit('SET_BMAP', BMAP)
            // resolve(BMAP)
          }
          var script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
          script.onerror = reject
          document.head.appendChild(script)
          setTimeout(() => {
            console.log('12344')
            rmvBAMP()
            setBMAP(JSON.stringify(BMAP))
            commit('SET_BMAP', BMAP)
            resolve(BMAP)
          }, 200)
        } else {
          commit('SET_BMAP', BMAP)
          resolve(BMAP)
        }
      })
    }
  }
}

export default map
