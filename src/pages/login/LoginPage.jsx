import styled from '@emotion/styled'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginPage = () => {
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
        <Typography variant='h2'>Ingresar</Typography>
        <TextField type='text' variant='outlined' label='correo' />
        <TextField type='password' variant='outlined' label='password' />
        <Box sx={{ width: '100%' }}>
          <Button variant='contained' fullWidth>
            Ingresar
          </Button>
          <Link to='/registro'>
            <Typography variant='body1'>
              ¿No tienes cuenta? Registrate
            </Typography>
          </Link>
        </Box>
      </Form>
    </Container>
  )
}

export default LoginPage

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
