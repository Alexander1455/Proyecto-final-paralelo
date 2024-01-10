import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useProgress } from '../../hooks/useUser'
import { useAuthStore } from '../../store/useAuthStore'

const ProgresoPage = () => {
  const { token } = useAuthStore()
  const { data, isLoading, isError } = useProgress(token)

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100%'
      p='10rem 2rem'
    >
      {!isLoading && !isError && data && (
        <>
          <Box>
            <Typography variant='h4' fontWeight='bold' lineHeight='1.8'>
              Rutinas completadas
            </Typography>
            <Box display='flex' alignItems='center' gap={2}>
            <Box width="95%">
              <LinearProgress
                variant='determinate'
                value={data.data.progress * 10 < 100 ? data.data.progress * 10 : 100 }
                sx={{ height: 30, borderRadius: '30px' }}
              />
            </Box>
            <Typography variant='h4' fontWeight='bold'>{data.data.progress}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant='h4' fontWeight='bold' lineHeight='1.8'>
            Desafios diarios completados
            </Typography>
            <Box display='flex' alignItems='center' gap={2}>
            <Box width="95%">
              <LinearProgress
                variant='determinate'
                value={data.data.challenge * 10 < 100 ? data.data.challenge * 10 : 100 }
                sx={{ height: 30, borderRadius: '30px' }}
              />
            </Box>
            <Typography variant='h4' fontWeight='bold'>{data.data.challenge}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant='h4' fontWeight='bold' lineHeight='1.8'>
              Días de racha
            </Typography>
            <Box display='flex' alignItems='center' gap={2}>
            <Box width="95%">
              <LinearProgress
                variant='determinate'
                value={20}
                sx={{ height: 30, borderRadius: '30px' }}
              />
            </Box>
            <Typography variant='h4' fontWeight='bold'>2</Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default ProgresoPage
