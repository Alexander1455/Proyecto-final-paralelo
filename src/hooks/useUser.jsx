import { useQuery } from '@tanstack/react-query'
import baseAuthApi from '../api/userApi'

const getUserById = async (_ctx) => {
  try {
    const [, token] = _ctx.queryKey
    return await baseAuthApi.get('/', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

const getProgress = async (_ctx) => {
  try {
    const [, token] = _ctx.queryKey
    return await baseAuthApi.get('/progress', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useUserById = (token) => useQuery({ queryKey: ['userId', token], queryFn: getUserById })

export const useProgress = (token) => useQuery({ queryKey: ['progress', token], queryFn: getProgress })
