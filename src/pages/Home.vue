<template lang="pug">
  div
    Header
    .login
      .login__inner
        Input(
          placeholder="メールアドレス"
          style="margin-bottom: 16px;"
          )
        Input(
          type="password"
          placeholder="パスワード"
          style="margin-bottom: 32px;"
        )
        Button(color="primary") ログイン
      
</template>

<script>
import { atoms, organisms } from '../components'

const { Header } = organisms
const { Button, Input } = atoms

export default {
  components: {
    Header,
    Input,
    Button
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
