import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import useToast from '../../hooks/useToast'
import Aside from './components/Aside'
import styled from '@emotion/styled'
import Wrapper from './components/Wrapper'
import { useVerifyToken } from '../../hooks/Auth'
import { useEffect } from 'react'

const PrivatePage = () => {
  const { token, clear } = useAuthStore()
  const navigate = useNavigate()

  const { createToast } = useToast()

  const { isLoading, data } = useVerifyToken(token)

  const logout = () => {
    createToast('error', 'Tu token ha expirado')
    navigate('/')
    clear()
  }

  useEffect(() => {
    if (!token) {
      logout()
    }
  }, [])

  return (
    <Main>
      { !isLoading && data && data.status === 401 && (
        <Navigate to="/" replace={true} />
      )}
      { !isLoading && data && data.status !== 401 && (
        <>
          <Aside/>
          <Container>
            <Outlet />
          </Container>
          <Wrapper/>
        </>
      )}
    </Main>
  )
}

export default PrivatePage

const Main = styled.main`
  height: 100dvh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
`

const Container = styled.main`
  width: 100%;
  height: 90vh;
  background-color: #4f59e4;
  border-radius: 4rem;
  padding: 1.5em;
  overflow: hidden;
  margin: auto 0;
`
