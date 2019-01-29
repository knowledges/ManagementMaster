import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tree from './modules/tree'
import files from './modules/files'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user, // 用户基础信息
    tree, // 树形结构
    files // 附件
  },
  getters
})

export default store
