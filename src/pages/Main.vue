<template lang="pug">
  div
    Header
    .main
      .main__inner
        .main__side
          MessageListItem(
            v-for="connection in $data.connections"
            :key="connection._id",
            :user="connection.users.filter(user => user._id !== $data.user._id).map(user => user.name).join(', ')"
          ) {{ connection.messages.slice(-1)[0].content }}
        .main__detail
          .message
            .message__item(
              v-for="message in $data.connections[1].messages"
              :key="message._id"
            )
              UserImage(
                v-if="message.from !== $data.user._id"
                :width="32"
              )
              div
                div(
                  v-if="message.from !== $data.user._id && $data.connections[0].users.length > 2"
                ) {{ $data.connection[1].users.find(user => user._id == $message.from).name }}
                ChatBubble(
                  :fromMe="message.from !== $data.user._id"
                  :date="message.createdAt"
                ) {{ message.content }}
          MessageInput(
            v-model="$data.input"
          )
</template>

<script>
import { atoms, organisms, molecules } from '../components'
// import api from '../services/api'

const { ChatBubble, UserImage } = atoms
const { Header } = organisms
const { MessageListItem, MessageInput } = molecules

export default {
  components: {
    Header,
    MessageListItem,
    MessageInput,
    ChatBubble,
    UserImage
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
              _id: 'ee',
              content: '返信1',
              from: 'aa',
              createdAt: new Date()
            }
          ]
        },
        {
          _id: 'b',
          name: 'グループ1',
          users: [
            {
              _id: 'ff',
              name: 'ユーザ名3'
            },
            {
              _id: 'bb',
              name: 'ユーザ名2'
            },
            {
              _id: 'gg',
              name: 'ユーザ名4'
            }
          ],
          messages: [
            {
              _id: 'hh',
              content: '適当なメッセージ',
              from: 'ff',
              createdAt: new Date()
            },
            {
              _id: 'ii',
              content: '適当なメッセージの返信',
              from: 'bb',
              createdAt: new Date()
            },
            {
              _id: 'jj',
              content: '適当なメッセージの返信その2',
              from: 'ff',
              createdAt: new Date()
            },
            {
              _id: 'gg',
              content: '適当なメッセージの返信その2',
              from: 'ff',
              createdAt: new Date()
            }
          ]
        }
      ],
      user: {
        _id: 'bb',
        name: 'ユーザ名2'
      },
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
