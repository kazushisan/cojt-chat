import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  displayName: String,
  name: String,
  password: String,
  mail: String
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
