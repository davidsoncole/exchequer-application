import Vue from 'vue'
import Router from 'vue-router'
// admin router
import Login from './views/Admin/Login.vue'
import Dashboard from './views/Admin/Dashboard.vue'
import Transactions from './views/Admin/Transactions.vue'
import Members from './views/Admin/Members.vue'
import Notifications from './views/Admin/Notifications.vue'
import Settings from './views/Admin/Settings.vue'
// users router
import Usersignup from './views/User/Usersignup.vue'
import Usersplash from './views/User/Usersplash.vue'
import Userverification from './views/User/Userverification.vue'
import Userlogin from './views/User/Userlogin.vue'
import Userdashboard from './views/User/Userdashboard.vue'
import Userloans from './views/User/Userloans.vue'
import Usersavings from './views/User/Usersavings.vue'
import Usertransactions from './views/User/Usertransactions.vue'
import Userbilling from './views/User/Userbilling.vue'
import Usernotifications from './views/User/Usernotifications.vue'
import Usersettings from './views/User/Usersettings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    // users router
    {
      path: '/usersignup',
      name: 'usersignup',
      component: Usersignup
    },
    {
      path: '/usersplash',
      name: 'usersplash',
      component: Usersplash
    },
    {
      path: '/userverification',
      name: 'userverification',
      component: Userverification
    },
    {
      path: '/userlogin',
      name: 'userlogin',
      component: Userlogin
    },
    {
      path: '/userdashboard',
      name: 'userdashboard',
      component: Userdashboard
    },
    {
      path: '/userloans',
      name: 'userloans',
      component: Userloans
    },
    {
      path: '/usersavings',
      name: 'usersavings',
      component: Usersavings
    },
    {
      path: '/usertransactions',
      name: 'usertransactions',
      component: Usertransactions
    },
    {
      path: '/userbilling',
      name: 'userbilling',
      component: Userbilling
    },
    {
      path: '/usernotifications',
      name: 'usernotifications',
      component: Usernotifications
    },
    {
      path: '/usersettings',
      name: 'usersettings',
      component: Usersettings
    },
    
  ]
})
