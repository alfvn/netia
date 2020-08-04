const toLogin = () => {}
const tips = () => {}
const errorHandler = (status, msg) => {
  switch (status) {
    case 401:
      // 未登录 跳转到登录页
      toLogin()
      break
    case 403:
      // token过期
      localStorage.removeItem('token')
      toLogin()
      break
    case 404:
      // 请求不存在 提示
      tips('请求不存在')
      break
    default:
      tips('请求出错！' + msg)
      break
  }
}
