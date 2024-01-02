import {
  Box,
  Button,
  Grid,
  TextField,
  // ToggleButton,
  // ToggleButtonGroup,
  Typography
} from '@mui/material'
// import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import dayjs from 'dayjs'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateRoutine } from '../../../hooks/useRoutine'
import { useAuthStore } from '../../../store/useAuthStore'
import useToast from '../../../hooks/useToast'
import { useQueryClient } from '@tanstack/react-query'
// import { useState } from 'react'

const ModalRoutine = ({ close }) => {
  // const [formats, setFormats] = useState(() => [])

  // const handleFormat = (event, newFormats) => {
  //   setFormats(newFormats)
  // }

  // const [time, setTime] = useState(dayjs('2022-04-17T12:00'))

  const { handleSubmit, register, reset, formState: { errors } } = useForm()

  const { token } = useAuthStore()

  const { mutateAsync } = useCreateRoutine(token)

  const { createToast } = useToast()

  const queryClient = useQueryClient()

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
        {/* <Grid container gap={2} xs={12} display='flex'> */}
        {/* <Grid
          item
          xs={6}
          display='flex'
          alignItems='center'
          gap={1}
        >
          <Typography>Dias:</Typography>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            color='primary'
            size='medium'
          >
            <ToggleButton value='L'>
              <p>L</p>
            </ToggleButton>
            <ToggleButton value='M'>
              <p>M</p>
            </ToggleButton>
            <ToggleButton value='MI'>
              <p>MI</p>
            </ToggleButton>
            <ToggleButton value='J'>
              <p>J</p>
            </ToggleButton>
            <ToggleButton value='V'>
              <p>V</p>
            </ToggleButton>
            <ToggleButton value='S'>
              <p>S</p>
            </ToggleButton>
            <ToggleButton value='D'>
              <p>D</p>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid> */}
        {/* <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label='Inicio de tiempo' sx={{ width: '100%' }} value={time}
            />
          </LocalizationProvider>
        </Grid> */}
        {/* </Grid> */}
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
        <Button variant='contained' type='submit'>Guardar</Button>
      </Grid>
    </Box>
  )
}

export default ModalRoutine
