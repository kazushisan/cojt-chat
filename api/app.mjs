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

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      res.header(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE, OPTIONS'
      )
      next()
    })

    app.options('*', (req, res) => {
      res.sendStatus(200)
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
