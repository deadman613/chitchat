import React from 'react'
import { useAuthStore } from '../store/useAuthstore'
import symbol from "../image/symbolchitchat.png"
import { NavLink } from 'react-router-dom'
import { Settings, User ,LogOut } from "lucide-react"



  const Navbar = () => {
    const {logout ,authUser}= useAuthStore();

  return (
    <div className='bg-linear-to-r from-[#573e63bd] to-[#9119f3]  rounded shadow-lg shadow-black mb-8 w-full flex justify-between items-center red h-15'>
      <div className='text-gray-50 flex gap-3  font-bold mx-4 font-sans  text-3xl'>
        <img src={symbol} alt=""  className='h-10 w-10  text-orange-500'/>
        ChitChat

      </div>
      <div className='text-gray-50 flex gap-3.5'>
      <NavLink to="/settings" className='text-[18px] flex items-center gap-1 mr-6 scale-90 hover:scale-100 cursor-pointer'>
      <Settings/>
      <span className='hidden sm:inline text-gray-100'>Settings</span>
      </NavLink>
      {
        authUser &&
        <>
        <NavLink to="/profile" className="text-[18px] cursor-pointer scale-90 hover:scale-100 ">
        <User className="size-5" />
        <span className='text-gray-100 hidden sm:inline mr-7'>Profile</span>
        </NavLink>
        <button className='rounded  text-gray-100 mr-7 cursor-pointer flex gap-3.5 items-center scale-90 hover:scale-100 'onClick={logout}>
        <LogOut className='size-5'/>
        <span className='hidden sm:inline'>Logout</span>

        </button>
        </>
      }

   
      </div>

    </div>
  )
}

export default Navbar