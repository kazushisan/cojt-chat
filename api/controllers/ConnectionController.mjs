import mongoose from 'mongoose'
import Connection from '../models/Connection'

class ConnectionController {
  list(req, res) {
    Connection.find({ users: [req.login._id] })
      .sort({ updateAt: -1 })
      .select('_id name users updateAt')
      .populate({
        path: 'users',
        select: 'displayName _id name'
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
    Connection.findOne({ users: [req.login._id, req.body_id] })
      .select('_id name users updateAt')
      .populate({
        path: 'users',
        select: 'displayName _id name'
      })
      .exec((err, result) => {
        if (err) {
          res.status(503).json({ message: 'database error' })
        } else if (result._id) {
          res.status(200).json(result)
        } else {
          Connection.create({
            _id: new new mongoose.Types.ObjectId()(),
            users: [req.login._id, req.body._id],
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
