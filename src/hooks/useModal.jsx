import { Box, Button, Modal, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import InfoIcon from '@mui/icons-material/Info'

export const useModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ModalContainer = ({ children, styles }) => {
    const style = useRef({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
    })

    return <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={ { ...style.current, ...styles } }>
        {children}
      </Box>
    </Modal>
  }

  return { open, handleOpen, handleClose, ModalContainer }
}

export const useModalConfirm = () => {
  const { ModalContainer, handleClose, handleOpen } = useModal()

  const ModalConfirm = ({ styles, onConfirm }) => {
    return <ModalContainer styles={{ ...styles, width: 400, borderRadius: '1em' }}>
      <Box display='flex' justifyContent='center'>
      <InfoIcon sx={{ fontSize: '5em', color: '#9c9c9c' }} />
      </Box>
      <Typography textAlign='center' variant='h5' fontWeight='bold' fontSize='1.8em' lineHeight='1.8'>¿Estás seguro?</Typography>
      <Typography textAlign='center' variant='body1' fontSize='1.2em' lineHeight='1.6'>Se eliminará el registro</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
        <Button variant='contained' color='success' onClick={onConfirm}>Aceptar</Button>
      </Box>
    </ModalContainer>
  }

  return { ModalConfirm, handleOpen, handleClose }
}
