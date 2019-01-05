import { getPowerTree } from '@/api/tree'

const tree = {
  state: {
    powers: []
  },
  mutations: {
    SET_POWER_TREE: (state, data) => {
      state.powers = data
    }
  },
  actions: {
    /* 获取权限列表 */
    GetPowerTree({ commit, state }) {
      return new Promise((resolve, reject) => {
        getPowerTree().then(response => {
          commit('SET_POWER_TREE', response.data.children)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default tree
