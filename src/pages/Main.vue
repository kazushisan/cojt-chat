<template lang="pug">
  div
    Header
    .main
      .main__inner
        .message-list
          MessageListItem(
            v-for="connection in $data.connections"
            :key="connection._id",
            :user="connection.users.map(user => user.name).join(', ')"
          ) {{ connection.messages.slice(-1)[0].content }}
</template>

<script>
import { organisms, molecules } from '../components'
// import api from '../services/api'

const { Header } = organisms
const { MessageListItem } = molecules

export default {
  components: {
    Header,
    MessageListItem
  },
  data() {
    return {
      connections: [
        {
          _id: 'a',
          name: 'グループ1',
          users: [
            {
              _id: 'aa',
              name: 'ユーザ名1'
            },
            {
              _id: 'bb',
              name: 'ユーザ名2'
            }
          ],
          messages: [
            {
              _id: 'cc',
              content: 'メッセージ',
              from: 'aa',
              createdAt: new Date()
            },
            {
              _id: 'dd',
              content: 'メッセージ',
              from: 'bb',
              createdAt: new Date()
            },
            {
              _id: 'cc',
              content: '返信1',
              from: 'aa',
              createdAt: new Date()
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
