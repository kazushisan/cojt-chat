import authController from '../controllers/AuthController'
import userController from '../controllers/UserController'
import socketController from '../controllers/SocketController'

import authMiddleware from '../middlewares/AuthMiddleware'

import apiRoutes from './apiRoutes'

export default (app, io) => {
  app.post('/api/auth/login', authController.login.bind(authController))
  app.post('/api/user/create', userController.create.bind(userController))
  app.use('/api', [authMiddleware.authenticate.bind(authMiddleware)], apiRoutes)

  io.on('connection', socket => {
    console.log('a user connected')

    socket.on('join', token => socketController.join(io, socket, token))

    socket.on('send', (token, data) =>
      authMiddleware.authSocket(io, socket, token, id =>
        socketController.send(io, socket, id, data)
      )
    )
  })
}
