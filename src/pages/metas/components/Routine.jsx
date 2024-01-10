import { Box, Typography } from '@mui/material'
import { useModal } from '../../../hooks/useModal'
import ModalRoutine from './ModalRoutine'
import { useState } from 'react'

const Routine = ({ id, name, description, time }) => {
  const { ModalContainer, handleOpen, handleClose } = useModal()

  const [typeModal, setTypeModal] = useState('view')

  const closeModal = () => {
    handleClose()
    setTypeModal('view')
  }

  return (
    <>
      <Box component='li' width='min(100%, 40rem)' marginInline='auto' borderRadius={5} height='100%' display='flex' bgcolor='#3a45e1' alignItems='center' boxShadow={2} padding=".8rem" sx={{ ':hover': { bgcolor: '#3a45e14b' }, cursor: 'pointer', transition: 'background-color 0.2s ease' }} onClick={handleOpen}>
        <Typography fontSize="1.5em" fontWeight='bold' color='white' lineHeight='1.5' textAlign='center' width='100%'>{name}</Typography>
      </Box>
      <ModalContainer styles={{ width: '40rem' }} onClose={closeModal}>
        <ModalRoutine id={id} type={typeModal} setType={setTypeModal} routine={{ id, name, description, time } } close={closeModal} />
      </ModalContainer>
    </>
  )
}

export default Routine
