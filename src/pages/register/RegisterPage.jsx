import styled from '@emotion/styled'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material'

import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Form>
        <Typography variant='h2'>Registrate</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField type='text' variant='outlined' label='Nombre' />
          </Grid>
          <Grid item xs={6}>
            <TextField type='text' variant='outlined' label='Apellido' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='email'
              variant='outlined'
              label='Correo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='password'
              variant='outlined'
              label='password'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label='Fecha de Nacimiento' sx={{ width: '100%' }} />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Button variant='contained' fullWidth>
            Ingresar
          </Button>
          <Link to='/'>
            <Typography variant='body1'>
              ¿Si tienes cuenta? Inicia sesión
            </Typography>
          </Link>
        </Box>
      </Form>
    </Container>
  )
}

export default RegisterPage

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: min(90%, 27rem);

  & > h2 {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }

  & > div > button {
    padding: 0.8em 0;
  }
`
