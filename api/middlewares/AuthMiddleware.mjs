import jwt from '../services/jwt'

class AuthMiddleware {
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
    jwt
      .verifyToken(token)
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

  authSocket(io, socket, token, callback) {
    jwt
      .verifyToken(token)
      .then(decode => {
        callback(decode._id)
      })
      .catch(() => {
        io.to(socket.id).emit('error', { message: 'unauthorized request' })
      })
  }
}

const authMiddleware = new AuthMiddleware()

export default authMiddleware
