import phraseApi from '../api/phraseApi'
import { useQuery } from '@tanstack/react-query'

const getPhrase = async () => {
  try {
    return await phraseApi.get('/')
  } catch (error) {
    return error.response
  }
}

export const usePhrase = () => useQuery({ queryKey: ['phrase'], queryFn: getPhrase })
