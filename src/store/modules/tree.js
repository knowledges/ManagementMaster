import { getPowerTree } from '@/api/tree'
import {
  getPowerList,
  setPowerList,
  setMenusList,
  getRouterRestructure
} from '@/utils/powers'
const tree = {
  state: {
    powers: [],
    menus: []
  },
  mutations: {
    SET_POWER_TREE: (state, data) => {
      state.powers = data
    },
    SET_MENUS_LIST: (state, data) => {
      state.menus = data
    }
  },
  actions: {
    /* 获取权限列表 */
    GetPowerTree({ commit, state }) {
      return new Promise((resolve, reject) => {
        var tree = getPowerList()
        var route = []
        /* TODO 这里 插入一个首页 目前使用的是dashboard */
        /* 如果本地不存在；再同步线上数据 */
        if (tree !== null) {
          commit('SET_POWER_TREE', tree)
          var array = getRouterRestructure(tree)
          route = route.concat(array)
          resolve(route)
        } else {
          getPowerTree().then(response => {
            if (Number(response.code) === 200) {
              var data = response.data.children
              if (data.length > 0) {
                commit('SET_POWER_TREE', response.data.children)
                setPowerList(JSON.stringify(response.data.children))
                var array = getRouterRestructure(data)
                route = route.concat(array)
                resolve(route)
              } else {
                reject('您还未被分配权限')
              }
            } else {
              reject('请求移除')
            }
          }).catch(error => {
            reject(error)
          })
        }
      })
    },
    /* 获取左侧边栏-菜单 */
    SetMenusList({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_MENUS_LIST', data)
        setMenusList(JSON.stringify(data))
        resolve()
      })
    }
  }
}

export default tree
