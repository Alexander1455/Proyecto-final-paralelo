import { Button, Typography } from '@mui/material'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import useToast from '../../hooks/useToast'
import Credentials from './components/Credentials'

const ConfigPage = () => {
  const { clear } = useAuthStore()
  const navigate = useNavigate()
  const { createToast } = useToast()

  const handleLogout = () => {
    clear()
    navigate('/', { replace: true })
    createToast('success', 'Sesión cerrada correctamente')
  }

  return (
    <div>
      <Typography variant='h3' fontWeight='bold' textAlign='center'>Configuración</Typography>
        <Credentials />
      <Button onClick={handleLogout} variant='contained' type='button' color='error' sx={{ mt: 4 }}>Cerrar sesión</Button>
    </div>
  )
}

export default ConfigPage
