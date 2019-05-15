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

const ConnectionModel = mongoose.model('Connection', connectionSchema)

export default ConnectionModel
