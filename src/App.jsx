import './style.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to='/'>Login</Link>
          <Link to='/registro'>Registro</Link>
          <Link to='/'></Link>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<div>Pagina de Login</div>} />
        <Route path='/registro' element={<div>Página de Registro</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
