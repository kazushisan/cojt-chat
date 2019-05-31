import authController from './AuthController'

class SocketController {
  join(io, socket, token) {
    authController
      .verifyToken(token)
      .then(decode => {
        socket.join(decode._id)
      })
      .catch(() => {
        console.log(socket.id)
        io.to(socket.id).emit('error', { message: 'unauthorized request' })
      })
  }
}

const socketController = new SocketController()
export default socketController
