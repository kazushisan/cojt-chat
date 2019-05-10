// import socketIo from 'socket.io'
// import http from 'http'

import authController from '../controllers/AuthController'
import apiRoutes from './apiRoutes'

export default app => {
  app.post('/api/auth/login', authController.login.bind(authController))
  app.use('/api', [authController.authenticate.bind(authController)], apiRoutes)
  // app.use('/api', apiRoutes)

  // const io = socketIo(http.Server(app))

  // io.on('connection', socket => {
  //   console.log('a user connected')
  // })
}
