import io from 'socket.io-client'

class Socket {
  connect() {
    this.socket = io('http://localhost:3000')
  }

  authenticate(token) {
    this.socket.emit('authenticate', token)
  }
}

export default new Socket()
