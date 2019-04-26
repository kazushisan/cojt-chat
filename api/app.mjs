import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import routes from './routes'

export default () =>
  new Promise((resolve, reject) => {
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

    app.get('/', (req, res) => {
      res.send('hello world')
    })

    mongoose.connect('mongodb://localhost:27017/cojt-chat', {
      useNewUrlParser: true
    })

    const db = mongoose.connection

    db.on('error', () => {
      reject()
    })

    db.once('open', () => {
      routes(app)
      resolve(app)
    })
  })
