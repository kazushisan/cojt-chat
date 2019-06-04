import mongoose from 'mongoose'
import jwt from '../services/jwt'
import Message from '../models/Message'
import Connection from '../models/Connection'

class SocketController {
  join(req) {
    const { token, io, socket } = req
    jwt
      .verifyToken(token)
      .then(decode => {
        socket.join(decode._id)
      })
      .catch(() => {
        io.to(socket.id).emit('error', { message: 'unauthorized request' })
      })
  }

  send(req) {
    const { io, socket, id, data } = req
    const messageId = new mongoose.Types.ObjectId()

    Message.create({
      _id: messageId,
      from: id,
      content: data.content,
      connection: data.connection
    })
      .then(document =>
        document
          .populate({
            path: 'from',
            select: 'displayName _id name'
          })
          .execPopulate()
      )
      .then(document => {
        data.createdAt = document.createdAt
        data.from = document.from
        return this.findConnectionById(document.connection)
      })
      .then(document => {
        document.latestMessage = messageId
        return document.save()
      })
      .then(document =>
        document
          .populate({
            path: 'from',
            select: 'displayName _id name'
          })
          .execPopulate()
      )
      .then(document => {
        document.users.forEach(user => {
          io.to(user).emit('new message', {
            content: data.content,
            connection: data.connection,
            createdAt: data.createdAt,
            from: data.from
          })
        })
      })
      .catch(err => {
        if (err.message === 'connection not found') {
          io.to(socket.id).emit('error', { message: err.message })
        } else {
          console.log(err)
          io.to(socket.id).emit('error', { message: 'database error' })
        }
      })
  }

  findConnectionById(id) {
    return new Promise((resolve, reject) => {
      Connection.findById(id).exec((err, document) => {
        if (err) {
          reject(err)
        } else if (!document) {
          reject(new Error('connection not found'))
        } else {
          resolve(document)
        }
      })
    })
  }
}

const socketController = new SocketController()
export default socketController
