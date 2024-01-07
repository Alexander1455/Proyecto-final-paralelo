import { Box, Checkbox, Grid, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

const Challenge = ({ id, name, description }) => {
  return (
    <Grid component='li' container height={90} width='100%' boxShadow={2} borderRadius={1} p={1} bgcolor='#ffffff22'>
      <Grid item xs={12}>
        <Typography variant='h5' fontSize='1.2em' fontWeight='bold'>{name}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Box height='100%' display='grid' alignItems='center'>
          <LinearProgress color='primary' sx={{ height: '5px', borderRadius: '5px' }}/>
        </Box>
      </Grid>
      <Grid item container alignItems='center' xs={2} justifyContent='end'>
        <Checkbox/>
      </Grid>
    </Grid>
  )
}

export default Challenge
