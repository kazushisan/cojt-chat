import User from '../models/User'
import jwt from '../services/jwt'

class AuthController {
  constructor() {
    this.config = {
      secret: 'samplesecretkey123',
      expiresIn: '24h'
    }
  }

  login(req, res) {
    const { mail, password } = req.body

    User.findOne({ mail, password }).exec((err, adventure) => {
      if (err) {
        const status = 503
        const message = 'internal server error'
        res.status(status).json({ status, message })
        return
      }

      if (!adventure) {
        const status = 400
        const message = 'invalid user credientials'
        res.status(status).json({ status, message })
        return
      }

      const status = 200
      const { _id, name } = adventure
      const token = jwt.createToken({ _id, name })
      res.status(status).json({ _id, name, token })
    })
  }
}

const authController = new AuthController()

export default authController
