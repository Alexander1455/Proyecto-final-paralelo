import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
      <App />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />
    {/* </React.StrictMode> */}
  </QueryClientProvider>
)
