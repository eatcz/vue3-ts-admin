import request from '../utils/request'
import request from '@/utils/request'

// 登录
export const login = (data) =>
  request({
    url: '/user/login',
    method: 'post',
    data,
  })
