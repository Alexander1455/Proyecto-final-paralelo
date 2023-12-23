import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import AppPage from './pages/app/AppPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/app' element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
