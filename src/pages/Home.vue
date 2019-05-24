<template lang="pug">
  div
    Header
    .login
      .login__inner
        Input(
          placeholder="メールアドレス"
          style="margin-bottom: 16px;"
          v-model="$data.loginForm.mail"
          )
        Input(
          type="password"
          placeholder="パスワード"
          style="margin-bottom: 32px;"
          v-model="$data.loginForm.password"
        )
        Button(
          color="primary"
          @click="login"
        ) ログイン
      
</template>

<script>
import { atoms, organisms } from '../components'
import api from '../services/api'

const { Header } = organisms
const { Button, Input } = atoms

export default {
  components: {
    Header,
    Input,
    Button
  },
  data() {
    return {
      loginForm: {
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const { mail, password } = this.$data.loginForm

      api
        .login({ mail, password })
        .then(response => {
          const { token } = response.data
          this.$store.commit('AuthStore/setToken', token)
          return api.getUser(this.$store.state.AuthStore.token)
        })
        .then(response => {
          this.$store.commit('UserStore/set', response.data)

          this.$router.push({ path: '/main' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #fff;
}

.login {
  max-width: 320px;
  margin: 120px auto;
  padding: 16px;
}
</style>
