// import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Settingpage from "./pages/Settingpage"
import Profilepage from "./pages/Profilepage"
import Signup from "./pages/Signup"
import { useAuthStore } from './store/useAuthstore'
import './App.css'
import { useEffect } from 'react'
import {  Loader } from "lucide-react"
import { Toaster } from "react-hot-toast";

function App() {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();

  }, [checkAuth])

  console.log('checkAuht ', { authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin' />

      </div>
      )


  }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ authUser ?   <Homepage /> : <Navigate to="/login"/>   } />
        <Route path='/login' element={!authUser ? <Login/> : <Navigate to="/"/> } />
        <Route path='/signup' element={ !authUser ? <Signup/> : <Navigate to="/"/> } />
        <Route path='/settings' element={  <Settingpage /> } />
        <Route path='/profile' element={ authUser ? <Profilepage /> : <Navigate to="/login"/> } />

      </Routes>
      <Toaster/>

    </div>
  )
}

export default App
