<template lang="pug">
  div(style="display: flex; flex-direction: column; height: 100vh;")
    .main
      .main__inner
        .main__side
          PillSelector(
            v-model="$data.selectedTab"
            :options="['Messages', 'Contacts']"
            style="padding: 40px 20px;"
          )
          .tab
            .tab__item(:style="{ marginLeft: $data.selectedTab * -100 + '%' }")
              MessageListItem(
                v-for="connection in ConnectionStore.connections"
                :key="connection._id",
                :user="connection.users.filter(user => user._id !== UserStore.user._id).map(user => user.displayName).join(', ')"
                @click="clickConnection(connection._id)"
              ) {{ connection.latestMessage ? connection.latestMessage.content : '' }}
            .tab__item
              UserListItem(
                v-for="user in UserStore.user.contacts"
                :key="user._id"
                :name="user.name"
                :displayName="user.displayName"
                @click="clickContact(user._id)"
              )
        .main__detail
          .detail-header(
            v-if="currentConnection"
          ) {{ currentConnection.users.filter(user => user._id !== UserStore.user._id).map(user => user.displayName).join(', ') }}
          .message(ref="message")
            .message__item(
              v-for="message in MessageStore.messages"
              :key="message._id"
              :class="{ 'message__item--me': message.from._id === UserStore.user._id }"
            )
              UserImage(
                v-if="message.from._id !== UserStore.user._id"
                :width="32"
                :style="{ marginRight: '8px' }"
              )
              div
                div(
                  v-if="message.from._id !== UserStore.user._id && currentConnection.users.length > 2"
                  :style="{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.3)' }"
                ) {{ currentConnection.users.find(user => user._id === message.from._id).name }}
                ChatBubble(
                  :fromMe="message.from._id === UserStore.user._id"
                  :date="message.createdAt"
                ) {{ message.content }}
          MessageInput(
            v-if="currentConnection"
            v-model="$data.input"
            @send="onSend"
            style="flex: 0 0 auto;"
          )
</template>

<script>
import { mapState } from 'vuex'
import { atoms, organisms, molecules } from '../components'
import api from '../services/api'
import socket from '../services/socket'
import store from '../store'

const { ChatBubble, UserImage, PillSelector } = atoms
const { Header } = organisms
const { MessageListItem, MessageInput, UserListItem } = molecules

export default {
  components: {
    Header,
    MessageListItem,
    MessageInput,
    ChatBubble,
    UserImage,
    UserListItem,
    PillSelector
  },
  data() {
    return {
      selectedTab: 0,
      input: ''
    }
  },
  computed: {
    ...mapState({
      AuthStore: state => state.AuthStore,
      UserStore: state => state.UserStore,
      ConnectionStore: state => state.ConnectionStore,
      MessageStore: state => state.MessageStore
    }),
    currentConnection() {
      return store.getters['ConnectionStore/currentConnection']
    }
  },
  mounted() {
    if (this.AuthStore.token) {
      store.dispatch('UserStore/getUser')
      store.dispatch('ConnectionStore/listConnection')
      socket.connect(this.$refs.message)
      socket.join({ token: this.AuthStore.token })
    } else {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    async onSend() {
      socket.send({
        token: this.AuthStore.token,
        data: {
          content: this.$data.input,
          connection: this.ConnectionStore.current
        }
      })
      this.$data.input = ''
    },
    async clickConnection(connectionId) {
      store.commit('ConnectionStore/setCurrent', connectionId)
      await store.dispatch('ConnectionStore/listConnection')
      await store.dispatch('MessageStore/listMessage', connectionId)
    },
    async clickContact(id) {
      const response = await api
        .findOrCreateConnection(this.AuthStore.token, id)
        .catch(err => {
          console.log(err)
        })
      const connectionId = response.data._id
      store.commit('ConnectionStore/setCurrent', connectionId)
      await store.dispatch('ConnectionStore/listConnection')
      await store.dispatch('MessageStore/listMessage', connectionId)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  flex: 1 0 0;
  display: flex;
  background-color: #fafafa;

  &__inner {
    display: flex;
    flex: 1 0 0;
  }

  &__side {
    flex: 0 0 auto;
    width: 360px;
    overflow-y: scroll;
  }

  &__detail {
    position: relative;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(#000, 0.05);
    border-radius: 16px 0 0 16px;
  }
}

.message {
  flex: 1 0 0;
  padding: 20px;
  overflow-y: scroll;

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &--me {
      flex-direction: row-reverse;
    }
  }
}

.tab {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;

  &__item {
    flex: 0 0 auto;
    width: 100%;
    position: relative;
    transition: all 0.3s;
  }
}

.detail-header {
  border-bottom: 1px #eee solid;
  padding: 20px;
}
</style>
