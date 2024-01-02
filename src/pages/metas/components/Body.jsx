import { useAuthStore } from '../../../store/useAuthStore'
import { useGetAllRoutine } from '../../../hooks/useRoutine'

const Body = () => {
  const { token } = useAuthStore()
  const { data, isLoading, isError } = useGetAllRoutine(token)

  return (
    <ul>
      {!isLoading && !isError && data && (
        data.data.map(routine => (
          <li key={routine.id}>{routine.name}</li>
        ))
      )}
    </ul>
  )
}

export default Body
