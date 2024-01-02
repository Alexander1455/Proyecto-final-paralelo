import { Box } from '@mui/material'
import { usePhrase } from '../../../hooks/phrase.hook'

const Phrase = () => {
  const { data, isLoading, isError } = usePhrase()

  return (
    <Box bgcolor="#4f59e4" color="#fff" width="100%" p="3em 2em" borderRadius={3}>
      {!isLoading && !isError && data && (
        <p>{data?.data?.message}</p>
      )}
    </Box>
  )
}

export default Phrase
