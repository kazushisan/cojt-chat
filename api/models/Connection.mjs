import mongoose from 'mongoose'

const connectionSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
)

const Connection = mongoose.model('Connection', connectionSchema)

export default Connection
