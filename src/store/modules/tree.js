import { getPowerTree } from '@/api/tree'
import { getPowerList, setPowerList, getMenusList, setMenusList } from '@/utils/powers'

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
        /* 如果本地不存在；再同步线上数据 */
        if (tree !== null) {
          commit('SET_POWER_TREE', tree)
          resolve()
        } else {
          getPowerTree().then(response => {
            commit('SET_POWER_TREE', response.data.children)
            setPowerList(JSON.stringify(response.data.children))
            resolve()
          }).catch(error => {
            reject(error)
          })
        }
      })
    },
    /* 获取左侧边栏-菜单 */
    SetMenusList({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        var menu = getMenusList()
        if (menu !== null) {
          commit('SET_MENUS_LIST', menu)
        } else {
          commit('SET_MENUS_LIST', data)
          setMenusList(JSON.stringify(data))
        }
        resolve()
      })
    }
  }
}

export default tree
