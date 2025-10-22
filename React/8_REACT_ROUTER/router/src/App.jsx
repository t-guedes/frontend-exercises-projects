import './App.css'

import { Outlet } from 'react-router-dom';

// 5- links entre paginas 
import Navbar from './components/Navbar.jsx';

// 9- search params
import SearchForm from './components/SearchForm.jsx';

function App() {
  return (
    <>
      <div className='App'>
       <Navbar /> 
       <SearchForm />
       <Outlet />
       <p>Footer</p>
      </div>
    </>
  )
}

export default App
