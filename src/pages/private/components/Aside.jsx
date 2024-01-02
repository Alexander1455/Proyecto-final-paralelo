import styled from '@emotion/styled'
import SettingsIcon from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'
import ListLink from './ListLink'

const Aside = () => {
  return (
    <Main>
      <h2>PROGRESIONICA</h2>
      <ListLink/>
      <Link to="/config">
        <SettingsIcon/>
      </Link>
    </Main>
  )
}

export default Aside

const Main = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;

  & > h2 {
    font-size: 2em;
  }


  & > a {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    color: black;
  }

  & > a > svg {
    width: 3rem;
    height: 3rem;
    animation: rotate 10s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
