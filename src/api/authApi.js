import axios from 'axios'

const baseAuthApi = axios.create({
  baseURL: 'http://localhost:3000/auth'
})

export default baseAuthApi
