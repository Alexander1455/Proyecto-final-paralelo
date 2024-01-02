import { Box, Modal } from '@mui/material'
import { useRef, useState } from 'react'

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
