import axios from 'axios'
// import errorHandler from './errorHandler'

const instance = axios.create()

instance.defaults.timeout = 10000
instance.defaults.headers.post['Content-type'] = 'application/json'

instance.interceptors.request.use(
  (config) => {
    //   token
    const token = localStorage.getItem('csrf_token')
    if (token) {
      config.headers.post['X-CSRF-Token'] = 'token'
    }
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.responce.use(
  (res) => {
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(err)
    }
  },
  (err) => {
    //   错误拦截处理
    // errorhandler(status,msg)
    // 断网处理
    if (!window.navigator.onLine) {
      // ...
    }
    return Promise.reject(err)
  }
)
export default instance
