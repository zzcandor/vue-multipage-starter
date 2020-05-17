import axios from 'axios'
import Vue from 'vue'
// import store from '../store'
import { getSessionStorage, getCookie } from '@/utils/store'
Vue.use(Cube)
let ajax = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60 * 1000
})
const vueObj = new Vue()
// 拦截请求
ajax.interceptors.request.use((config) => {
  config.headers.token = getSessionStorage('token') || getCookie('token')
  return config
}, error => {
  return Promise.reject(error)
})

// 拦截响应
ajax.interceptors.response.use(response => {
  return response
}, error => {
  return error.response
})

export default ajax
