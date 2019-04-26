class MessageController {
  static read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }
}

export default MessageController
