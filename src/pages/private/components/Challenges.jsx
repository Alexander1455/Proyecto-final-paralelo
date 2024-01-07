import { Box, Typography } from '@mui/material'
import { useChallengeActive } from '../../../hooks/useChallente'
import { useAuthStore } from '../../../store/useAuthStore'
import { useEffect } from 'react'
import Challenge from './Challenge'
import Skeleton from '../../../components/Skeleton'

const Challenges = () => {
  const { token } = useAuthStore()

  const { data, isLoading, isError } = useChallengeActive(token)

  useEffect(() => {
    if (data && !isLoading && !isError) {
      console.log(data)
    }
  }, [data])

  return (
    <Box flexBasis='100%' bgcolor="#4f59e4" borderRadius={3} p={2}>
      <Typography variant='h3' fontSize='1.8em' fontWeight='bold' lineHeight='1.8em'>Desafios diarios</Typography>
      <Box component='ul' display='grid' gap='1rem'>
      {isLoading && (
        Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} width='100%' height={90} sx={{ borderRadius: 2 }}/>
        ))
      )}
      {isError && 'Error'}
      {!isLoading && !isError && data && data.data.length === 0 && 'No active challenges'}
      {!isLoading && !isError && data && data.data.length > 0 && data.data.map((challenge) => (
        <Challenge key={challenge.id} {...challenge}/>
      ))}
      </Box>
    </Box>
  )
}

export default Challenges
