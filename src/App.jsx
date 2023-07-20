// import { useState } from 'react'

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeTheme from './components/ChangeTheme'
import Todos from './components/Todos'
import { useSelector } from 'react-redux';


function App() {

  const theme = useSelector(state => state.theme.value);

  return (
    <div className={`App ${theme}`}  >
      <main>
        <ChangeTheme />
        <Profile />
        <Login />
        <Todos />
      </main>
    </div>
  )
}

export default App
