/*
 * @Author: DaiLinBo
 * @Date: 2019-09-05 15:55:03
 * @LastEditTime: 2020-03-30 09:50:44
 * @LastEditors: xuhongwei
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      beforeEnter () {
        window.location = "/"
      }
    },
    {
      name: '新年活动',
      path: '/new-year',
      component: () => import('@/pages/activity/views/new-year')
    }
  ]
})
