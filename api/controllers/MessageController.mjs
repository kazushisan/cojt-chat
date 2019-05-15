class MessageController {
  read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }

  create(req, res) {
    res.status(200).json({ message: 'successfully created' })
  }
}

const messageController = new MessageController()

export default messageController
