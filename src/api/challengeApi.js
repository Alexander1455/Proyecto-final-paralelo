import axios from 'axios'

const baseChallengeApi = axios.create({
  baseURL: 'http://localhost:3000/challenge'
})

export default baseChallengeApi
