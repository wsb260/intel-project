import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'
import user from './modules/user'
import edit from './modules/edit'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    edit
  },
  plugins:[createPersistedState()]
})
