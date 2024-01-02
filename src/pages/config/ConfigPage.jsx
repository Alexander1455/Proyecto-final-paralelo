import { Button } from '@mui/material'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import useToast from '../../hooks/useToast'

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
      <p>config Page</p>
      <button>Cerrar sesión</button>
      <Button onClick={handleLogout} variant='contained' type='button' color='error'>Cerrar sesión</Button>
    </div>
  )
}

export default ConfigPage
