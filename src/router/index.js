import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/pages/index/index.vue'
import Order from '@/pages/order'
=======
<<<<<<< HEAD
import Message from '@/pages/message/message'
=======
import Index from '@/pages/index'
import City from '@/pages/city'
>>>>>>> origin/master
>>>>>>> origin/master

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/message',
      name: 'Message',
      component: Message
=======
      path: '/',
      name: 'Index',
      component: Index
    }, {
<<<<<<< HEAD
      path: '/order',
      name: 'Order',
      component: Order
=======
      path: '/city',
      name: 'City',
      component: City
>>>>>>> origin/master
>>>>>>> origin/master
    }
  ]
})
