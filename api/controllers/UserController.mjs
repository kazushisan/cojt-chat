import mongoose from 'mongoose'
import UserModel from '../models/UserModel'

class UserController {
  create(req, res) {
    const { name, password, mail, displayName } = req.body

    // バリデーションは微妙なので要検討
    if (!name || !password || !mail || !displayName) {
      res.status(400).json({ message: 'bad request' })
      return
    }

    this.assertNoDuplicate(name, mail)
      .then(() =>
        UserModel.create({
          _id: new mongoose.Types.ObjectId(),
          name,
          displayName,
          password,
          mail
        })
      )
      .then(document => {
        const { _id } = document
        res.status(200).json({ _id })
      })
      .catch(err => {
        if (err.message === 'duplicate') {
          res.status(200).json({ message: 'duplicate user exists' })
        } else {
          res.status(503).json({ message: 'database error' })
          console.log(err)
        }
      })
  }

  get(req, res) {
    this.findById(req.login._id)
      .then(document =>
        document
          .populate({
            path: 'contacts',
            select: 'displayName _id name'
          })
          .execPopulate()
      )
      .then(document => {
        const { name, displayName, mail, _id, contacts } = document
        res.status(200).json({ name, displayName, mail, _id, contacts })
      })
      .catch(err => {
        res.status(503).json({ message: 'database error' })
        console.log(err)
      })
  }

  addContact(req, res) {
    this.findById(req.login._id)
      .then(async document => {
        const { _id } = await UserModel.findOne({ name: req.params.name })

        if (document.contacts && document.contacts.indexOf(_id) === -1) {
          document.contacts.push(_id)
        } else {
          document.contacts = [_id]
        }
        return document.save()
      })
      .then(() => {
        res.status(200).json({ message: 'success' })
      })
      .catch(err => {
        res.status(503).json({ message: 'database error' })
        console.log(err)
      })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      UserModel.findById(id).exec((err, document) => {
        if (err) {
          reject(err)
        } else if (!document) {
          reject(new Error('user not found'))
        } else {
          resolve(document)
        }
      })
    })
  }

  assertNoDuplicate(name, mail) {
    return new Promise((resolve, reject) => {
      UserModel.find()
        .or([{ name }, { mail }])
        .exec((err, result) => {
          if (err) {
            reject(err)
          } else if (result.length > 0) {
            reject(new Error('duplicate'))
          } else {
            resolve()
          }
        })
    })
  }
}

const userController = new UserController()

export default userController
