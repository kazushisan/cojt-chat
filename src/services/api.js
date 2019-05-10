import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3000/api'
}

class api {
  static async login(data) {
    const response = axios.post('/auth/login', data, config).catch(err => {
      throw new Error(err)
    })
    return response
  }
}

export default api
