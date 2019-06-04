import io from 'socket.io-client'
import store from '../store'

class Socket {
  connect(messageComponent) {
    this.socket = io('http://localhost:3000')
    this.messageComponent = messageComponent

    this.socket.on('error', data => this.onError(data))
    this.socket.on('new message', data => this.onNewMessage(data))
  }

  join({ token }) {
    this.socket.emit('join', { token })
  }

  send({ token, data }) {
    this.socket.emit('send', { token, data })
  }

  onError(data) {
    console.log(data)
  }

  onNewMessage(data) {
    if (store.state.ConnectionStore.current === data.connection) {
      console.log(this.messageComponent.scrollHeight)

      store.commit('MessageStore/push', data)
      console.log(this.messageComponent.scrollHeight)
    }
    store.dispatch('ConnectionStore/listConnection')
  }
}

export default new Socket()
