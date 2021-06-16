import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex)


const state = {
    // 商品信息
  cartList: []
}

// 2.创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 3.挂在vue实例导出
export default store
