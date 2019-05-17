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
        res.status(200).json(document)
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

  addContact(req, res) {
    UserModel.findById(req.login._id)
      .then(async document => {
        const { _id } = await UserModel.findOne({ name: req.params.name })

        if (document.contact) {
          document.contacts.append(_id)
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
