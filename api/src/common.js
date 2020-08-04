import http from '../utils/http'
import base from '../base'

export default {
  login({ username, password }) {
    return http.post(base.user.login, { username, password })
  },
}
