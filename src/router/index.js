import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/list'
import Index from '@/pages/index/index.vue'
import Order from '@/pages/order'
import Message from '@/pages/message/message'
import City from '@/pages/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
