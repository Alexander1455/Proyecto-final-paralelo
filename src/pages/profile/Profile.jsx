import { Box } from '@mui/material'
import { useUserById } from '../../hooks/useUser'
import { useAuthStore } from '../../store/useAuthStore'
import { formatDate } from '../../helpers/formatDate'

const Profile = () => {
  const { token } = useAuthStore()

  const { data: res, isLoading, isError } = useUserById(token)

  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
      {!isLoading && !isError && res && (
        <Box fontSize="1.3em" fontWeight='bold' gap={1} textAlign='center' justifyContent='center' display='flex' flexDirection='column' height='100%' sx={{ img: { width: '8rem', mx: 'auto' } }}>
          <img src={res.data.profile} alt='avatar' />
          <p>{res.data.name} {res.data.lastName}</p>
          <p>se unió el {formatDate(res.data.createdAt)}</p>
        </Box>
      )}
    </Box>
  )
}

export default Profile
