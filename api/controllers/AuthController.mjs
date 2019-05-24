import jwt from 'jsonwebtoken'
import User from '../models/User'

class AuthController {
  constructor() {
    this.config = {
      secret: 'samplesecretkey123',
      expiresIn: '24h'
    }
  }

  authenticate(req, res, next) {
    const { authorization } = req.headers
    if (
      authorization === undefined ||
      authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 400
      const message = '不正なアクセスです'
      res.status(status).json({ status, message })
      return
    }

    const token = authorization.split(' ')[1]
    this.verifyToken(token)
      .then(decode => {
        req.login = {
          // eslint-disable-next-line no-underscore-dangle
          _id: decode._id,
          name: decode.name
        }
        next()
      })
      .catch(() => {
        const status = 400
        const message = 'invalid credientials'
        res.status(status).json({ status, message })
      })
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
      const token = this.createToken({ _id, name })
      res.status(status).json({ _id, name, token })
    })
  }

  createToken(payload) {
    const { expiresIn, secret } = this.config
    return jwt.sign(payload, secret, { expiresIn })
  }

  verifyToken(token) {
    const { secret } = this.config
    return new Promise((resolve, reject) =>
      jwt.verify(token, secret, (err, decode) =>
        decode !== undefined ? resolve(decode) : reject(err)
      )
    )
  }
}

const authController = new AuthController()

export default authController
