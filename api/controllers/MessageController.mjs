// import UserModel from '../models/UserModel'

class AuthController {
  authenticate(req, res, next) {
    const authorization = req.headers.authorization

    if (
      authorization === undefined ||
      authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 400
      const message = '認証に失敗しました'
      res.status(status).json({ status, message })
    }
  }
}

const authController = new AuthController()

export default authController
