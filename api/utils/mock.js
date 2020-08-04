import Mock from 'mockjs'
import base from '../base'

const loginRes = {
  data: {
    status: 'success',
  },
}

Mock.mock(base.user.login, 'post', loginRes)
