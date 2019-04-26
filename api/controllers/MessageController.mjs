class MessageController {
  read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }
}

const messageController = new MessageController()

export default messageController
