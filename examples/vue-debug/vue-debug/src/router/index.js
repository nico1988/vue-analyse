import Vue from '../../../../../dist/vue.esm' // 注意这里也要和main.js的vue文件一致
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import VModel from '../components/VModel'

Vue.use(Router)
export default new Router(
  {
    routes: [
      {
        path:'/',
        component: HelloWorld,
        name: 'hello-world'
      },
      {
        path:'/model',
        component: VModel,
        name: 'VModel'
      },
    ]
  }
)
