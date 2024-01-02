import axios from 'axios'

const baseAuthApi = axios.create({
  baseURL: 'http://localhost:3000/phrase'
})

export default baseAuthApi
