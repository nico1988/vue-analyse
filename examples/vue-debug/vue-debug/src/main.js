// import Vue from 'vue'
import Vue from '../../../../dist/vue.esm'  // runtim-compiler
// import Vue from '../../../../dist/vue.runtime.esm'  // runtim-only
import router from './router'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

