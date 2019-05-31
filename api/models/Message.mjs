import mongoose from 'mongoose'

const messageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    connection: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection' },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema)

export default Message
