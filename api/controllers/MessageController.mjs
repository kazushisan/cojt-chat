// import MessageModel from '../models/MessageModel'

class MessageController {
  read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }

  create(req, res) {
    // const { content, connection } = req.body
    // const from = req.login._id
    // const message = new MessageModel({
    // })
    res.status(200).json({ message: 'successfully created' })
  }
}

const messageController = new MessageController()

export default messageController
