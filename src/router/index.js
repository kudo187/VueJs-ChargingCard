import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/client/Home'
import BuyCardViettel from '@/components/client/manage-card/BuyCardViettel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: BuyCardViettel,
        },
        {
          name: 'viettel-card',
          path: 'viettel-card',
          component: BuyCardViettel,
        }
      ]
    }
  ]
})
