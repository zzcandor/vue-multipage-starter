import ajax from './axios'

// 返现查询该区域返现活动
export const getCashBackList = () => {
  return ajax.post('/wealth/activity/cashBack/detail')
}