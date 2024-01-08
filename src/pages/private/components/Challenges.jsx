import { Box, Typography } from '@mui/material'
import { useChallengeActive, useChallengeResolve } from '../../../hooks/useChallente'
import { useAuthStore } from '../../../store/useAuthStore'
import Challenge from './Challenge'
import Skeleton from '../../../components/Skeleton'

const Challenges = () => {
  const { token } = useAuthStore()

  const { data, isLoading, isError } = useChallengeActive(token)

  const { data: challengesResolves, isLoading: load } = useChallengeResolve(token)

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
      {!isLoading && !isError && data && data.data.length > 0 && challengesResolves && !load && data.data.map((challenge) => (
        <Challenge key={challenge.id} {...challenge} isResolve={challengesResolves.data.includes(challenge.id)}/>
      ))}
      </Box>
    </Box>
  )
}

export default Challenges
