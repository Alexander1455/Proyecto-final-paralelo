import { useQuery } from '@tanstack/react-query'
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

export const useChallengeActive = (token) => useQuery({ queryKey: ['challengeActive', token], queryFn: getChallenges })
