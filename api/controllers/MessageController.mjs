import Message from '../models/Message'

class MessageController {
  read(req, res) {
    res.status(200).json({ message: 'hello world' })
  }

  list(req, res) {
    Message.find()
      .where('connection')
      .equals(req.params.id)
      .sort({ updateAt: -1 })
      .populate({
        path: 'from',
        select: 'displayName _id name'
      })
      .select('_id content connection from createdAt')
      .exec((err, result) => {
        if (err) {
          res.status(503).json({ message: 'database error' })
        } else {
          res.status(200).json(result)
        }
      })
  }
}

const messageController = new MessageController()

export default messageController
