import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  displayName: String,
  name: String,
  password: String,
  mail: String
})

const User = mongoose.Model('User', userSchema)

export default User
