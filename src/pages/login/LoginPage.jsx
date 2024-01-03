import { useNavigate, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
// import { useLoginUser } from '../../hooks/Auth'
import { useForm } from 'react-hook-form'
import { useLoginUser, useVerifyToken } from '../../hooks/Auth'
import useToast from '../../hooks/useToast'
import { useAuthStore } from '../../store/useAuthStore'
import { useEffect } from 'react'

const LoginPage = () => {
  const { mutateAsync } = useLoginUser()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const { createToast } = useToast()

  const navigate = useNavigate()

  const { token, setToken } = useAuthStore()

  const loginSuccess = res => {
    setToken(res.data.token)
    navigate('/metas')
  }

  const handleLogin = async data => {
    const res = await mutateAsync(data)
    if (res.status === 200) {
      createToast('success', res.data.message)
      loginSuccess(res)
    }
    if (res.status === 404) {
      createToast('error', res.data.message)
    }
  }

  const { data, isLoading, isError } = useVerifyToken(token)

  useEffect(() => {
    if (token && !isLoading && !isError && data?.status === 200) {
      navigate('/metas')
    }
  }, [data])

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Typography variant='h2'>Ingresar</Typography>
        <TextField
          type='text'
          variant='outlined'
          label='correo'
          {...register('email', {
            required: 'El correo es obligatorio es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'El correo no es válido'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type='password'
          variant='outlined'
          label='password'
          {...register('password', {
            required: 'La contraseña es obligatorio'
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Box sx={{ width: '100%' }}>
          <Button variant='contained' fullWidth type='submit'>
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
