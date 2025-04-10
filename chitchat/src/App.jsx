// import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Settingpage from "./pages/Settingpage"
import Profilepage from "./pages/Profilepage"
import Signup from "./pages/Signup"
import './App.css'

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/settings' element={<Settingpage />} />
        <Route path='/profile' element={<Profilepage />} />

      </Routes>

      </div>
  )
}

export default App
