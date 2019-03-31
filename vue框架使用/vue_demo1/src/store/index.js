/*
*vuex核心管理文件
*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
//*声明使用vuex
Vue.use(Vuex)
//*配置stroe
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})