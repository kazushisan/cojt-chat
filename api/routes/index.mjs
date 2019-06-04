import authController from '../controllers/AuthController'
import userController from '../controllers/UserController'
import socketController from '../controllers/SocketController'

import authMiddleware from '../middlewares/AuthMiddleware'

import generateSocketHandler from '../services/generateSocketHandler'

import apiRoutes from './apiRoutes'

export default (app, io) => {
  app.post('/api/auth/login', authController.login.bind(authController))
  app.post('/api/user/create', userController.create.bind(userController))
  app.use('/api', [authMiddleware.authenticate.bind(authMiddleware)], apiRoutes)

  io.on('connection', socket => {
    console.log('a user connected')

    const join = generateSocketHandler(io, socket, [
      socketController.join.bind(socketController)
    ])
    const send = generateSocketHandler(io, socket, [
      authMiddleware.authSocket.bind(authMiddleware),
      socketController.send.bind(socketController)
    ])

    socket.on('join', join)
    socket.on('send', send)
  })
}
