import { Box, Checkbox, Grid, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { usePostChallenge } from '../../../hooks/useChallente'
import { useAuthStore } from '../../../store/useAuthStore'
import { useQueryClient } from '@tanstack/react-query'

const Challenge = ({ id, name, description, reward, isResolve }) => {
  const { token } = useAuthStore()
  const { mutateAsync } = usePostChallenge(token)
  const queryClient = useQueryClient()

  const handleChange = async () => {
    const res = await mutateAsync(id)
    console.log(res)
    if (res.status === 200) {
      queryClient.invalidateQueries(['challengeActive'])
    }
  }

  return (
    <Grid
      component='li'
      container
      height={90}
      width='100%'
      boxShadow={2}
      borderRadius={1}
      p={1}
      bgcolor='#ffffff22'
      position='relative'
    >
      <Grid item xs={12}>
        <Typography variant='h5' fontSize='1.2em' fontWeight='bold'>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Box height='100%' display='grid' alignItems='center'>
          {isResolve
            ? (<LinearProgress variant='determinate' value={100} />)
            : (<LinearProgress color='primary' sx={{ height: '5px', borderRadius: '5px' }} />)
          }
        </Box>
      </Grid>
      <Grid item container alignItems='center' xs={2} justifyContent='end'>
        <Checkbox checked={isResolve} disabled={isResolve} onChange={handleChange}/>
      </Grid>
      <Box position='absolute' top={2} right={10}>
        <Typography
          fontSize='0.8em'
          fontWeight='bold'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.6,
            img: { width: '15px' }
          }}
        >
          <span>+{reward}</span>
          <img src='/gema.webp' alt='asdas' />
        </Typography>
      </Box>
    </Grid>
  )
}

export default Challenge
