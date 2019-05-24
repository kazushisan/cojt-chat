class User {
  constructor(args = {}) {
    // required fields
    this._id = args._id
    this.displayName = args.displayName
    this.name = args.name

    // optional fields
    if (args.createdAt) {
      this.createdAt = new Date(args.createdAt)
    }

    if (args.mail) {
      this.mail = args.mail
    }

    if (args.contacts) {
      this.contacts = args.contacts.map(user => new User(user))
    }
  }
}

export default User
