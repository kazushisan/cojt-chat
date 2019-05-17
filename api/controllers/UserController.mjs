import mongoose from 'mongoose'
import UserModel from '../models/UserModel'

class UserController {
  create(req, res) {
    const { name, password, mail } = req.body

    // バリデーションは微妙なので要検討
    if (!name || !password || !mail) {
      res.status(400).json({ message: 'bad request' })
      return
    }

    UserModel.create({
      _id: new mongoose.Types.ObjectId,
      name,
      password,
      mail
    })
      .then(document => {
        res.status(200).json(document)
      })
      .catch(err => {
        res.status(503).json({ message: 'Database Error' })
        console.log(err)
      })
  }
}

const userController = new UserController()

export default userController
