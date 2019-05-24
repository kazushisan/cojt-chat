import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3000/api'
}

const http = axios.create(config)

class api {
  static async login(data) {
    const response = await http.post('/auth/login', data).catch(err => {
      throw err
    })
    return response
  }

  static async getUser(token) {
    const response = await http
      .get('/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err
      })
    return response
  }

  static async listConnection(token) {
    const response = await http
      .get('/connection', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err
      })
    return response
  }

  static async findOrCreateConnection(token, id) {
    const response = await http
      .get(`/connection/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err
      })
    return response
  }
}

export default api
