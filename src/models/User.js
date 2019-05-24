class User {
  constructor(args) {
    // required fields
    this._id = args._id
    this.displayName = args.displayName
    this.name = args.name
    this.createdAt = new Date(args.createdAt)

    // optional fields
    this.password = args.password
    this.contacts = args.contacts
    this.mail = args.mail
  }
}

export default User
