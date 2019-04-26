import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import routes from './routes'

export default () =>
  new Promise(resolve => {
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

    mongoose.connect('mongodb://example:root@localhost:27017/cojt-chat')

    const db = mongoose.connection

    db.once('open', () => {
      routes(app)
      resolve(app)
    })
  })
