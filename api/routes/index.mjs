// import authController from '../controllers/AuthController'
import apiRoutes from './apiRoutes'

export default app => {
  // app.get('/api/auth/login', authController.login.bind(authController))
  // app.use('/api', [authController.authenticate.bind(authController)], apiRoutes)
  app.get('/api/auth', apiRoutes)
}
