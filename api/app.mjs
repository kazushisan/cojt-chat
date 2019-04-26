import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import routes from './routes'

export default () => {
  const app = express()
  app.use(compression())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(
    bodyParser.json({
      limit: '10mb',
      extended: true
    })
  )
  routes(app)

  return app
}
