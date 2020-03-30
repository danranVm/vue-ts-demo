import Vue from 'vue'
import Vuex from 'vuex'

import { State } from './module-type'
import { test } from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store<State>({
  modules: {
    test,
  },
})
