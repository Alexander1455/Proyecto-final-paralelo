import { Box, Typography } from '@mui/material'
import { useAuthStore } from '../../../store/useAuthStore'
import { useUserById } from '../../../hooks/useUser'

const GameStats = () => {
  const { token } = useAuthStore()
  const { data: res, isLoading, isError } = useUserById(token)

  return (
    <Box display='flex' justifyContent='space-between'>
      <Box
        display='flex'
        alignItems='center'
        gap={1}
        sx={{ img: { width: '3rem' } }}
      >
        <img src='/fire.webp' alt='fire gif' />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#4f59e4',
            width: '2.5rem',
            height: '2.5rem',
            clipPath:
              'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0 75%, 0 25%)'
          }}
        >
          <Typography fontSize='1.1em' fontWeight='bold' color='white'>
            {/* {!isLoading && !isError && res && res.data.daysOfSplit} */}
            {2}
          </Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        gap={1}
        sx={{ img: { width: '3rem' } }}
      >
        <img src='/heart.webp' alt='fire gif' />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#4f59e4',
            width: '2.5rem',
            height: '2.5rem',
            clipPath:
              'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0 75%, 0 25%)'
          }}
        >
          <Typography fontSize='1.1em' fontWeight='bold' color='white'>
            {!isLoading && !isError && res && res.data.heart}
          </Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        gap={1}
        sx={{ img: { width: '3rem' } }}
      >
        <img src='/gema.webp' alt='fire gif' />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#4f59e4',
            width: '2.5rem',
            height: '2.5rem',
            clipPath:
              'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0 75%, 0 25%)'
          }}
        >
          <Typography fontSize='1.1em' fontWeight='bold' color='white'>
            {!isLoading && !isError && res && res.data.gems}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default GameStats
