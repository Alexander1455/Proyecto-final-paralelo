import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'

const list = [{ name: 'metas', link: '/metas' }, { name: 'progreso', link: '/progres' }, { name: 'perfil', link: '/profile' }]

const ListLink = () => {
  return (
    <Main>
      {list.map((item) => (
        <li key={item.name}>
          <NavLink to={item.link} className='element'>
            {item.name}
          </NavLink>
        </li>
      ))}
    </Main>
  )
}

export default ListLink

const Main = styled.ul`
  width: 100%;
  display: grid;
  gap: 2rem;

  & > li {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .element {
    width: 80%;
    padding: 2em 0 2em 1em;
    border-radius: 1rem;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%);
    background-color: #6973ef;
    font-size: 1.7em;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #4f59e4;
    }
    
    &.active {
      background-color: #171d73;
    }
  }
`
