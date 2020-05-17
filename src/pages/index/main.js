import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import filters from 'utils/filter'
import store from '@/store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import '@/assets/theme/index.scss'
import { getSessionStorage, setSessionStorage } from 'utils/store'
import { getCookie, setCookie } from '@/utils/store'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.online) {
    const toast = this.$createToast({
      txt: `网络已断开，请稍候再试......`,
      type: 'error',
      time: 2000
    })
    toast.show()
    return
  }
  document.title = to.meta.title || to.name
if (!to.meta.skipAuth) {
    let token = getSessionStorage('token')
    if (!token) {
      token = from.query.token
      setSessionStorage('token', token)
    }
    if (!token) {
      token = getCookie('token')
      setSessionStorage('token', token)
    } else {
      setCookie('token', token, 1)
    }
    if (!token) {
      next({
        path: '/dc/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false
Vue.use(filters)
Vue.use(Vuex)
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
