import styled from '@emotion/styled'
import { DateField, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { useRegisterUser } from '../../hooks/Auth'
import useToast from '../../hooks/useToast'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const { mutateAsync } = useRegisterUser()

  const { createToast } = useToast()

  const navigate = useNavigate()

  const registerUser = async user => {
    const newUser = {
      ...user,
      birthDate: dayjs(user.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD')
    }
    const res = await mutateAsync(newUser)
    if (res.status === 201) {
      createToast('success', res.data.message)
      reset()
      navigate('/')
    }
    if (res.status === 400) {
      createToast('error', res.data.message)
    }
    if (res.status === 500) {
      createToast('error', 'Error interno del servidor')
    }
  }

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Form onSubmit={handleSubmit(registerUser)}>
        <Typography variant='h2'>Registrate</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type='text'
              variant='outlined'
              label='Nombre'
              {...register('name', {
                required: 'El nombre es obligatorio'
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type='text'
              variant='outlined'
              label='Apellido'
              {...register('lastName', {
                required: 'El apellido es obligatorio'
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='email'
              variant='outlined'
              label='email'
              fullWidth
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='password'
              variant='outlined'
              label='contraseña'
              fullWidth
              {...register('password', {
                required: 'La contraseña es obligatorio'
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label='fecha de nacimiento'
                {...register('birthDate', {
                  required: 'La fecha es obligatoria',
                  pattern: {
                    value: /^\d{2}\/\d{2}\/\d{4}$/,
                    message: 'La fecha no es válida'
                  }
                })}
                error={!!errors.birthDate}
                helperText={errors.birthDate?.message}
                format='DD/MM/YYYY'
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Sexo</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Sexo'
                {...register('sex', {
                  required: 'El sexo es obligatorio'
                })}
                error={!!errors.sex}
                value={'m'}
              >
                <MenuItem value='m'>Masculino</MenuItem>
                <MenuItem value='f'>Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Button variant='contained' fullWidth type='submit'>
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
