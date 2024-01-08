import { useMutation, useQuery } from '@tanstack/react-query'
import baseChallengeApi from '../api/challengeApi'

const getChallenges = async (_ctx) => {
  try {
    const [, token] = _ctx.queryKey
    // await new Promise(resolve => setTimeout(resolve, 3000))
    return await baseChallengeApi.get('/active', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

const getIdChallengeResolve = async (_ctx) => {
  try {
    const [, token] = _ctx.queryKey
    return await baseChallengeApi.get('/resolve', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

const postChallenge = async (token, id) => {
  try {
    return await baseChallengeApi.post('/resolve', { challengeId: id }, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useChallengeActive = (token) => useQuery({ queryKey: ['challengeActive', token], queryFn: getChallenges })

export const useChallengeResolve = (token) => useQuery({ queryKey: ['challengeResolve', token], queryFn: getIdChallengeResolve })

export const usePostChallenge = (token) => useMutation({ mutationFn: (id) => postChallenge(token, id) })
