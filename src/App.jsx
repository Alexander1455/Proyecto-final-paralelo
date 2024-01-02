import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import PrivatePage from './pages/private/PrivatePage'
import 'react-toastify/dist/ReactToastify.css'
import MetasPage from './pages/metas/MetasPage'
import ProgresoPage from './pages/progreso/ProgresoPage'
import Profile from './pages/profile/Profile'
import ConfigPage from './pages/config/ConfigPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route element={<PrivatePage />}>
          <Route path='/metas' element={<MetasPage />} />
          <Route path='/progres' element={<ProgresoPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/config' element={<ConfigPage />} />
        </Route>
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme='light'
      />
    </BrowserRouter>
  )
}

export default App
