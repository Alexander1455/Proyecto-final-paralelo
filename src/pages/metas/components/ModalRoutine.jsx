import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useCreateRoutine } from '../../../hooks/useRoutine'
import { useAuthStore } from '../../../store/useAuthStore'
import useToast from '../../../hooks/useToast'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

const ModalRoutine = ({ close, type, routine }) => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm()

  const { token } = useAuthStore()

  const { mutateAsync } = useCreateRoutine(token)

  const { createToast } = useToast()

  const queryClient = useQueryClient()

  useEffect(() => {
    if (type === 'view') {
      reset({ name: routine.name, description: routine.description })
    }
  }, [type])

  const onSubmit = async (data) => {
    const res = await mutateAsync(data)
    console.log(res)
    if (res.status === 200) {
      queryClient.invalidateQueries(['routines'])
      createToast('success', 'Rutina creada correctamente')
    } else {
      createToast('error', 'Error al crear la rutina')
    }
    reset()
    close()
  }

  return (
    <Box display='grid' gap={3}>
      <Typography variant='h4' fontWeight='bold' textAlign='center'>
        Crear Rutina
      </Typography>
      <Grid container gap={2} component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
          <TextField label='Nombre de la rutina' variant='outlined' fullWidth {...register('name', {
            required: 'El nombre es requerido'
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          />
        </Grid>
        <TextField
          label='Descripción'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          {...register('description', {
            required: 'La descripción es obligatoria'
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Box display='flex' justifyContent='space-between' width='100%'>
          <Button variant='contained' color='error' onClick={close}>cerrar</Button>
          { type === 'view' ? null : <Button variant='contained' type='submit'>Guardar</Button>}
        </Box>
      </Grid>
    </Box>
  )
}

export default ModalRoutine
