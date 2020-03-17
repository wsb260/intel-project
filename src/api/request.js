import axios from 'axios'
import qs from 'qs'

switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = 'http://localhost:3000'
    break
  case 'test':
    axios.defaults.baseURL = 'http://localhost:3000'
    break
  default:
    axios.defaults.baseURL = '/api'
}
/**
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 100000
axios.defaults.withCredentials = true

/**
 * 设置请求传递数据的格式
 */
axios.defaults.headers['Cotent-Type'] = 'application/x-www-form-urlencoded'
// 只对post请求有效，把对象根式变成url拼接的方式
axios.defaults.transformRequest = data => qs.stringify(data)

const instance = axios.create()
/**
 * 设置请求拦截器
 * 客户端请求=》请求拦截器=》服务器
 * TOKEN校验：接受服务器返回的token，存储到vuex中，
 * 每一次向服务器发送请求带上token
 */
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.reject(error)
})

/**
  * 设置响应拦截器
  * 服务器返回信息=》拦截器的统一处理=》客户端JS获取到信息
  */
instance.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    const { response } = error
    if (response) {
      switch (error.response.status) {
        case 401: // 当前请求需要用户登录，权限
          break
        case 403: // 服务器接收请求但是拒绝执行，token/session过期
          localStorage.removeItem('token')
          // 跳转到登录页
          break
        case 404: // 找不到页面
          break
      }
    } else {
      // 服务器没有返回结果
      if (!window.navigator.onLine) {
        // 断网处理：可以跳转到断网页面
        return
      }
      return Promise.reject(error)
    }
})

export default instance
