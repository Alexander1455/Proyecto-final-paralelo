import { css, Global } from '@emotion/react'
import { CssBaseline } from '@mui/material'

const GlobalStyle = () => {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          button {
            background-color: inherit;
            border: unset;
            outline: none;
          }
          li {
            list-style: none;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      />
    </>
  )
}

export default GlobalStyle
