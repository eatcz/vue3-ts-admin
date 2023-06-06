import axios from 'axios'
import { ELMessage } from 'element-plus'
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
    switch (res.data.code) {
      case 200:
        return res.data
        break

      case 401:
        return res.data
        break
      case 404:
        return res.data
        break
      case 500:
        return res.data
        break
      default:
        return res.data
    }
  },
  (err) => {
    ELMessage.err(err)
    return Promise.reject(err)
  },
)

export default request
