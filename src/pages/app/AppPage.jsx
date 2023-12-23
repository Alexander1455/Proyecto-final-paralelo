import styled from '@emotion/styled'
import { useEffect } from 'react'
const AppPage = () => {
  useEffect(() => {
    console.log('asdasdas')
  }, [])

  return (
    <Main>
      <div>
        <p>Menu</p>
      </div>
      <div>
        <p>ruta</p>
      </div>
      <div>
        <p>niveles, corazones, etc</p>
      </div>
    </Main>
  )
}

export default AppPage

const Main = styled('main')`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  /* align-items: center; */

  & > div {
    border: 1px solid black;
  }

  & > div > p {
    font-size: 2em;
    font-weight: bold;
  }
`
