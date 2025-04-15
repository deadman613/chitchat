import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useAuthStore } from '../store/useAuthstore';
import { Eye, EyeOff, Mail, MessageSquare } from "lucide-react"

const Signup = () =>
{

  const [showpassword, setShowpassword] = useState("");
  const [formdata, setFormData] = useState({
    Fullname: "",
    email: "",
    password: ""
  });

  const { signup, isSigningup } = useAuthStore();

  const handlesubmit = () => {

  }



  return (
    <>
      <div className="signupbg   flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto flex flex-col items-center justify-center sm:w-full sm:max-w-sm">
          <MessageSquare className='text-gray-50 size-10' />

          <h2 className="mt-10 text-gray-50 text-center text-2xl/9 font-bold tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} action="#" method="POST" className="space-y-6">
            <div className='relative'>
              <label htmlFor="email" className="  block text-sm/6 font-medium text-gray-50">
                Email address
              </label>
              <Mail className=' absolute text-gray-500 mt-3.5 mx-2.5 text-base-content-40'></Mail>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-gray-300 px-9 py-1.5 text-base  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                />

              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium  text-gray-50">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-600 hover:text-red-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showpassword ? "text" : "password"}
                  placeholder='###########'
                  required
                  autoComplete="current-password"
                  className="block w-full  rounded-md bg-gray-300 px-3 py-2 mt-0.5 text-base  text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                  onChange={(e) => setFormData({ ...formdata, password: e.target.value })}
                />
                <button className='absolute right-3 top-2 '
                  onClick={() => setShowpassword(!showpassword)}
                  type='button'
                >
                  
                  {
                 
                  
                  showpassword ? 
                  (<Eye className='size-5' />)
                    :
                    (<EyeOff className='size-5' />)
                    }

                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className='flex w-full mt-10 rounded-[10px] py-2 text-white justify-center bg-gray-600 hover:bg-red-600'
              >
              Create Account
              </button>
            </div>
          </form>

        </div>
        <div className='flex justify-center gap-3.5 text-center'>
             <p className="mt-10 text-center text-sm/6 text-gray-50">
            Not a member?{' '}

          </p>
          <NavLink className='text-red-600 mt-10 justify-center' to="/login" >  signup</NavLink>
        </div>
       
  
      </div>
    </>
  )
}

export default Signup