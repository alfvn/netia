<!-- 使用vue serve来测试 -->
<template>
  <div class="login">
    <h1>登录</h1>
    <div>
      <label for="password">用户名</label>
      <input type="text" name="username" />
    </div>
    <div style="margin-top: 20px;">
      <label for="password">密码</label>
      <input type="password" name="password" />
    </div>
    <button style="margin-top: 20px;" @click="handleLogin">登录</button>
  </div>
</template>

<script>
import api from './api'
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  methods: {
    handleLogin() {
      api.common.login({ username: 'alfvn', password: '123' }).then(() => {
        alert('登录成功')
      })
    },
  },

  components: {},
}
</script>
<style scoped>
.login {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  text-align: center;
}
label {
  display: inline-block;
  width: 50px;
}
</style>
