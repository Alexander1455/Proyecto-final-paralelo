import { Box } from '@mui/material'
import Header from './components/Header'
import Body from './components/Body'

const MetasPage = () => {
  return (
    <Box height='100%' display='flex' flexDirection='column' gap={3} padding={2}>
      <Header/>
      <Body/>
    </Box>
  )
}

export default MetasPage
