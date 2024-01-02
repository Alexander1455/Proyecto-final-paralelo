import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useModal } from '../../../hooks/useModal'
import ModalRoutine from './ModalRoutine'

const Header = () => {
  const { ModalContainer, handleOpen } = useModal()

  return (
    <>
      <Button variant='contained' startIcon={<AddIcon/>} fullWidth onClick={handleOpen}>Añadir nueva rutina</Button>
      <ModalContainer styles={{ width: '40rem' }}>
        <ModalRoutine/>
      </ModalContainer>
    </>
  )
}

export default Header