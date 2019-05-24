// import Message from '../models/Message'

class MessageController {
  read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }

  create(req, res) {
    // const { content, connection } = req.body
    // const from = req.login._id
    // const message = new Message({
    // })
    res.status(200).json({ message: 'successfully created' })
  }
}

const messageController = new MessageController()

export default messageController
