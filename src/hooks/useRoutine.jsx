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

const putRoutine = async (token, data) => {
  try {
    return await baseRoutineApi.put(`/${data.id}`, data, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

const deleteRoutine = async (token, id) => {
  console.log(token)
  console.log(id)
  try {
    return await baseRoutineApi.delete(`/${id}`, {
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

export const usePutRoutine = (token) => useMutation({ mutationFn: (data) => putRoutine(token, data) })

export const useDeleteRoutine = (token) => useMutation({ mutationFn: (id) => deleteRoutine(token, id) })
