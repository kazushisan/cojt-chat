import io from 'socket.io-client'

class Socket {
  connect() {
    this.socket = io('http://localhost:3000')

    this.socket.on('error', data => this.onError(data))
  }

  join({ token }) {
    this.socket.emit('join', { token })
  }

  onError(data) {
    console.log(data)
  }
}

export default new Socket()
