import Vue from '../../../../../dist/vue.esm' // 注意这里也要和main.js的vue文件一致
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import VModel from '../components/VModel'
import Slot from '../page/slot'
import Transition from '../page/transition'
import TransitionGroup from '../page/transitionGroup'
import KeepAlive from '../page/keepAlive'

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
        name: 'model'
      },
      {
        path:'/slot',
        component: Slot,
        name: 'slot'
      },
      {
        path:'/transition',
        component: Transition,
        name: 'transition'
      },
      {
        path:'/keep-alive',
        component: KeepAlive,
        name: 'keep-alive'
      },
      {
        path:'/transition-group',
        component: TransitionGroup,
        name: 'transition-group'
      },
    ]
  }
)
