import jsonwebtoken from 'jsonwebtoken'

const config = {
  secret: 'samplesecretkey123',
  expiresIn: '24h'
}

class jwt {
  static createToken(payload) {
    const { expiresIn, secret } = config
    return jsonwebtoken.sign(payload, secret, { expiresIn })
  }

  static verifyToken(token) {
    const { secret } = config
    return new Promise((resolve, reject) =>
      jsonwebtoken.verify(token, secret, (err, decode) =>
        decode !== undefined ? resolve(decode) : reject(err)
      )
    )
  }
}

export default jwt
