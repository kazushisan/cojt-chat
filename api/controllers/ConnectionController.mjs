import mongoose from 'mongoose'
import Connection from '../models/Connection'

class ConnectionController {
  list(req, res) {
    Connection.find({ users: { $all: req.login._id } })
      .sort({ updateAt: -1 })
      .select('_id name users updateAt latestMessage')
      .populate({
        path: 'users',
        select: 'displayName _id name'
      })
      .populate({
        path: 'latestMessage',
        select: '_id content connection from createdAt'
      })
      .exec((err, result) => {
        if (err) {
          res.status(503).json({ message: 'database error' })
        } else {
          res.status(200).json(result)
        }
      })
  }

  findOrCreate(req, res) {
    Connection.find()
      .where('users')
      .all([req.login._id, req.params.id])
      .size(2)
      .select('_id name users updateAt')
      .limit(1)
      .populate({
        path: 'users',
        select: 'displayName _id name'
      })
      .exec((err, result) => {
        if (err) {
          res.status(503).json({ message: 'database error' })
        } else if (result.length === 1) {
          console.log('found')
          console.log(result)
          res.status(200).json(result[0])
        } else {
          console.log('not found')
          Connection.create({
            _id: new mongoose.Types.ObjectId(),
            users: [req.login._id, req.params.id],
            name: ''
          })
            .then(document =>
              document
                .populate({
                  path: 'users',
                  select: 'displayName _id name'
                })
                .execPopulate()
            )
            .then(document => {
              console.log(document)
              const { _id, name, users, updateAt } = document
              res.status(200).json({ _id, name, users, updateAt })
            })
            .catch(() => {
              res.status(503).json({ message: 'database error' })
            })
        }
      })
  }
}

const connectionController = new ConnectionController()

export default connectionController
