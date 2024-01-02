import authApi from '../api/authApi'
import { useMutation, useQuery } from '@tanstack/react-query'

const registerUser = async user => {
  try {
    const res = await authApi.post('/', user)
    return res
  } catch (error) {
    return error.response
  }
}

export const useRegisterUser = () =>
  useMutation({ mutationFn: user => registerUser(user) })

const loginUser = async user => {
  try {
    const res = await authApi.post('/login', user)
    return res
  } catch (error) {
    return error.response
  }
}

export const useLoginUser = () =>
  useMutation({ mutationFn: user => loginUser(user) })

const verifyToken = async _ctx => {
  try {
    const [, token] = _ctx.queryKey
    const res = await authApi.get('/verify', {
      headers: {
        token
      }
    })
    return res
  } catch (error) {
    return error.response
  }
}
export const useVerifyToken = (token) => useQuery({ queryKey: ['verify', token], queryFn: verifyToken })
