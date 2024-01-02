import { useAuthStore } from '../../../store/useAuthStore'
import { useGetAllRoutine } from '../../../hooks/useRoutine'
import Routine from './Routine'
import { Box } from '@mui/material'

const Body = () => {
  const { token } = useAuthStore()
  const { data, isLoading, isError } = useGetAllRoutine(token)

  return (
    <Box component='ul' display='grid' gap='2rem' sx={{
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      padding: '1rem 1rem'
    }}>
      {!isLoading && !isError && data && (
        data.data.map(routine => (
          <Routine key={routine.id} {...routine}/>
        ))
      )}
    </Box>
  )
}

export default Body
