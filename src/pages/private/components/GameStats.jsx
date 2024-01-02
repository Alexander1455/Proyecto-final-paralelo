import styled from '@emotion/styled'

const GameStats = () => {
  return (
    <Main>
      <Card>
      <img src="https://i.gifer.com/origin/18/1881d8691bd9ff18bea62c0a275e1da6_w200.gif" alt="fire gif" />
      <div>
        <p>1</p>
      </div>
      </Card>
      <Card>
      <img src="https://i.gifer.com/origin/18/1881d8691bd9ff18bea62c0a275e1da6_w200.gif" alt="fire gif" />
      <div>
        <p>1</p>
      </div>
      </Card>
      <Card>
      <img src="https://i.gifer.com/origin/18/1881d8691bd9ff18bea62c0a275e1da6_w200.gif" alt="fire gif" />
      <div>
        <p>1</p>
      </div>
      </Card>
      </Main>
  )
}

export default GameStats

const Main = styled.main`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 3rem;
    margin-bottom: 0.6em;
  }

  & > div {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0 75%, 0 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4f59e4;
    width: 3rem;
    height: 3rem;
    font-size: 1.4em;
    font-weight: bold;
    color: white;
  }
`
