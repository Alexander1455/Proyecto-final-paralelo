import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useCreateRoutine, useDeleteRoutine, usePutRoutine } from '../../../hooks/useRoutine'
import { useAuthStore } from '../../../store/useAuthStore'
import useToast from '../../../hooks/useToast'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Delete } from '@mui/icons-material'
import { useModalConfirm } from '../../../hooks/useModal'

const ModalRoutine = ({ close, type = 'create', routine, setType }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm()

  const { token } = useAuthStore()

  const { mutateAsync: createRoutine } = useCreateRoutine(token)

  const { createToast } = useToast()

  const queryClient = useQueryClient()

  const { mutateAsync: putRoutine } = usePutRoutine(token)

  useEffect(() => {
    if (type === 'view' || type === 'edit') {
      reset({ name: routine.name, description: routine.description })
    }
  }, [type])

  const onSubmit = async data => {
    if (type === 'create') {
      handleCreate(data)
    } else if (type === 'edit') {
      handleEdit(data)
    }
  }

  const handleEdit = async (data) => {
    const res = await putRoutine({ ...data, id: routine.id })

    if (res.status === 200) {
      queryClient.invalidateQueries(['routines'])
      createToast('success', 'Rutina editada correctamente')
    } else {
      createToast('error', 'Error al editar la rutina')
    }
    setType('view')
    reset()
    close()
  }

  const handleCreate = async (data) => {
    const res = await createRoutine(data)

    if (res.status === 200) {
      queryClient.invalidateQueries(['routines'])
      createToast('success', 'Rutina creada correctamente')
    } else {
      createToast('error', 'Error al crear la rutina')
    }
    reset()
    close()
  }

  const { ModalConfirm, handleOpen } = useModalConfirm()

  const { mutateAsync } = useDeleteRoutine(token)

  const handleDelete = async () => {
    const res = await mutateAsync(routine.id)
    console.log(res)
    if (res.status === 200) {
      queryClient.invalidateQueries(['routines'])
      createToast('success', res.data.message)
    } else {
      createToast('error', res.data.message)
    }
    close()
  }

  return (
    <Box display='grid' gap={3} position='relative'>
      <Typography variant='h4' fontWeight='bold' textAlign='center'>
        {(type === 'create' && 'Crear Rutina') || (type === 'edit' && 'Editar Rutina') || (type === 'view' && 'Rutina') }
      </Typography>
      <Grid
        container
        gap={2}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12}>
          <TextField
            label='Nombre de la rutina'
            variant='outlined'
            fullWidth
            {...register('name', {
              required: 'El nombre es requerido'
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            disabled={type === 'view'}
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
          disabled={type === 'view'}
        />
        <Box display='flex' justifyContent='space-between' width='100%'>
          <Button variant='contained' color='error' onClick={close}>
            cerrar
          </Button>
          {type === 'view'
            ? null
            : (
            <Button variant='contained' type='submit'>
              Guardar
            </Button>
              )}
        </Box>
      </Grid>
      {type === 'view' && (
        <Box sx={{ position: 'absolute', top: '0', right: '0', display: 'flex', gap: 1 }}>
          <IconButton
            aria-label='delete'
            color='error'
            sx={{ cursor: 'pointer' }}
            onClick={handleOpen}
          >
            <Delete />
          </IconButton>
          <IconButton
            aria-label='edit'
            color='warning'
            sx={{ cursor: 'pointer' }}
            onClick={() => setType('edit')}
          >
            <EditIcon />
          </IconButton>
        </Box>
      )}
      <ModalConfirm onConfirm={handleDelete}/>
    </Box>
  )
}

export default ModalRoutine
