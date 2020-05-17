import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from 'utils/filter'

Vue.config.productionTip = false
Vue.use(filters)

router.beforeEach((to, from, next) => {
  if (to.meta.title || to.name) document.title = to.meta.title || to.name
  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
