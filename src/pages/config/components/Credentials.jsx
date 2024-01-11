import { Box, Button, TextField, Typography } from '@mui/material'
import { usePutUser, useUserById } from '../../../hooks/useUser'
import { useAuthStore } from '../../../store/useAuthStore'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import useToast from '../../../hooks/useToast'

const Credentials = () => {
  const { token } = useAuthStore()

  const { data: res, isLoading, isError } = useUserById(token)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm()

  const { mutateAsync } = usePutUser(token)

  const { createToast } = useToast()

  const handleOnSubmit = async (data) => {
    const res = await mutateAsync(data)
    if (res.status === 200) {
      createToast('success', 'Credenciales actualizadas correctamente')
    } else {
      createToast('error', 'error al crear las credenciales')
    }
  }

  useEffect(() => {
    if (res && !isLoading && !isError) {
      reset({ name: res.data.name, lastName: res.data.lastName, email: res.data.email })
    }
  }, [res])

  return (
    <Box
      component='form'
      boxShadow={3}
      p={2}
      borderRadius={2}
      mt={4}
      display='grid'
      gap={2}
      bgcolor='#ffffff20'
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Typography variant='h4' fontSize='1.4em' fontWeight='bold'>
        Credenciales
      </Typography>
      <Box display='flex' alignItems='center'>
        <Typography fontSize='1.2em' width='8rem'>
          Nombre:
        </Typography>
        <TextField
          type='text'
          variant='outlined'
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es requerido'
            }
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Box>
      <Box display='flex' alignItems='center'>
        <Typography fontSize='1.2em' width='8rem'>
          Apellido:
        </Typography>
        <TextField
          type='text'
          variant='outlined'
          {...register('lastName', {
            required: {
              value: true,
              message: 'El apellido es requerido'
            }
          })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Box>
      <Box display='flex' alignItems='center'>
        <Typography fontSize='1.2em' width='8rem'>
          Correo:
        </Typography>
        <TextField
          type='text'
          variant='outlined'
          {...register('email', {
            required: {
              value: true,
              message: 'El correo es requerido'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Box>
      <Button variant='contained' sx={{ padding: '0.8rem 1rem' }} type='submit'>
        Cambiar Cuenta
      </Button>
    </Box>
  )
}

export default Credentials
