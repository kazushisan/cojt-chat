class Handler {
  constructor(req, methods) {
    this.req = req
    this.methods = [...methods]

    this.methods.shift()(req, this.next.bind(this))
  }

  next() {
    if (this.methods.length === 0) {
      return
    }

    this.methods.shift()(this.req, this.next.bind(this))
  }
}

const generateSocketHandler = (io, socket, methods) => req => {
  req.io = io
  req.socket = socket
  // eslint-disable-next-line no-new
  new Handler(req, methods)
}

export default generateSocketHandler
