// import { useState } from 'react'

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeTheme from './components/ChangeTheme'
import Todos from './components/Todos'
import { useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  const theme = useSelector(state => state.theme.value);

  return (
    <div className={`App ${theme}`}  >
      <nav>
        <ChangeTheme />
        <ul>
          <Link to='/'>Todos</Link>
          <Link to='/login'>Login</Link>
          <Link to='/profile'>Profile</Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Todos />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
