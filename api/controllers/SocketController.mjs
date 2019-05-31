import jwt from '../services/jwt'

class SocketController {
  join(io, socket, token) {
    jwt
      .verifyToken(token)
      .then(decode => {
        socket.join(decode._id)
      })
      .catch(() => {
        io.to(socket.id).emit('error', { message: 'unauthorized request' })
      })
  }
}

const socketController = new SocketController()
export default socketController
