import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/pages/message/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
