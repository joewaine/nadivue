import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Checkout from '@/components/Checkout'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
