import Vue from 'vue'

import 'vue-tsx-support/enable-check'

import App from './App.vue'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.prototype._store = app.$store
