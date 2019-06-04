import io from 'socket.io-client'
import store from '../store'

class Socket {
  connect() {
    this.socket = io('http://localhost:3000')

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
      store.commit('MessageStore/push', data)
    }
  }
}

export default new Socket()
