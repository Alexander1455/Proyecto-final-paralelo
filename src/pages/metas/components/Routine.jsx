import { Box, Typography } from '@mui/material'
import { useModal } from '../../../hooks/useModal'
import ModalRoutine from './ModalRoutine'

const Routine = ({ id, name, description }) => {
  const { ModalContainer, handleOpen, handleClose } = useModal()

  return (
    <>
      <Box component='li' width='100%' height='100%' display='flex' bgcolor='#3a45e1' alignItems='center' boxShadow={2} padding=".5rem .5rem" sx={{ ':hover': { bgcolor: '#3a45e14b' }, cursor: 'pointer', transition: 'background-color 0.2s ease' }} onClick={handleOpen}>
        <Typography fontSize="1.3em" lineHeight='1.5'>{name}</Typography>
      </Box>
      <ModalContainer styles={{ width: '40rem' }}>
        <ModalRoutine id={id} type='view' routine={{ id, name, description } } close={handleClose}/>
      </ModalContainer>
    </>
  )
}

export default Routine
