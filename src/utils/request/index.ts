import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  // config.headers
  return config
})

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    let message = ''
    const status: number = err.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        message = '网络出现问题'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    Promise.reject(err)
    // ElMessage.err(err)
    // return Promise.reject(err)
  },
)

export default request
