import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    displayName: String,
    name: String,
    password: String,
    mail: String
  },
  {
    timestamps: true
  }
)

const UserModel = mongoose.model('User', userSchema)

export default UserModel
