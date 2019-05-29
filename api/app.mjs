import http from 'http'
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import socket from 'socket.io'

import routes from './routes'

export default () =>
  new Promise((resolve, reject) => {
    const app = express()
    const server = http.createServer(app)
    const io = socket(server)

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
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      )
      res.header(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE, OPTIONS'
      )
      res.header('Access-Control-Allow-Credentials', 'true')
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
      routes(app, io)
      resolve(server)
    })
  })
