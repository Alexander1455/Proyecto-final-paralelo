import Phrase from './Phrase'
import GameStats from './GameStats'
import Challenges from './Challenges'
import { Box } from '@mui/material'

const Wrapper = () => {
  return (
  <Box p='2rem 4rem' display='flex' flexDirection='column' gap={3}>
      <GameStats/>
      <Challenges/>
      <Phrase/>
  </Box>
  )
}

export default Wrapper
