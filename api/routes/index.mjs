import authController from '../controllers/AuthController'
import userController from '../controllers/UserController'
import apiRoutes from './apiRoutes'

export default (app, io) => {
  app.post('/api/auth/login', authController.login.bind(authController))
  app.post('/api/user/create', userController.create.bind(userController))
  app.use('/api', [authController.authenticate.bind(authController)], apiRoutes)

  io.on('connection', socket => {
    console.log('a user connected')

    socket.on('authenticate', token => {
      console.log(token)
    })
  })
}
