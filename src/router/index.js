import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/client/Home'
import BuyCardViettel from '@/components/client/manage-card/BuyCardViettel.vue'
import BuyCardMobi from '@/components/client/manage-card/BuyCardMobi.vue'
import BuyCardVina from '@/components/client/manage-card/BuyCardVina.vue'
import ManageProfile from '@/components/client/manage-profile/ManageProfile.vue'
import Profile from '@/components/client/manage-profile/Profile.vue'
import ChangePassword from '@/components/client/manage-profile/ChangePassword.vue'
import TransactionHistory from '@/components/client/manage-profile/TransactionHistory.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: BuyCardViettel
    },
    {
      name: 'viettel-card',
      path: 'viettel-card',
      component: BuyCardViettel
    },
    {
      name: 'mobi-card',
      path: 'mobi-card',
      component: BuyCardMobi
    },
    {
      name: 'vina-card',
      path: 'vina-card',
      component: BuyCardVina
    }
    ]
  },
  {
    name: 'manage-profile',
    path: '/manage-profile',
    component: ManageProfile,
    children: [{
      path: '',
      component: Profile
    },
    {
      path: 'change-password',
      component: ChangePassword
    },
    {
      path: 'transaction-history',
      component: TransactionHistory
    }
    ]
  }
  ]
})
