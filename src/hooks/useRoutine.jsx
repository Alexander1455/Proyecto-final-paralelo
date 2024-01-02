import baseRoutineApi from '../api/routineApi'
import { useMutation, useQuery } from '@tanstack/react-query'

const createRoutine = async (token, routine) => {
  try {
    console.log(token)
    console.log(routine)
    return await baseRoutineApi.post('/', routine, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

const getAllRoutine = async (_ctx) => {
  try {
    const [, token] = _ctx.queryKey
    return await baseRoutineApi.get('/', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useCreateRoutine = (token) => useMutation({ mutationFn: (routine) => createRoutine(token, routine) })

export const useGetAllRoutine = (token) => useQuery({ queryKey: ['routines', token], queryFn: getAllRoutine })
