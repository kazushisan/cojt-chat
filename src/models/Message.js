class Message {
  constructor(args = {}) {
    this._id = args._id
    this.content = args.content
    this.connection = args.connection
    this.from = args.from
    this.createdAt = new Date(args.createdAt)
  }
}

export default Message
