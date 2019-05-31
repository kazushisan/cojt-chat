import Message from './Message'

class Connection {
  constructor(args = {}) {
    this._id = args._id
    this.name = args.name
    this.users = args.users

    if (args.latestMessage) {
      this.latestMessage = new Message(args.message)
    }
  }
}

export default Connection
