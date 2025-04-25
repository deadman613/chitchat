import { LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Eye, EyeOff, Loader2, Mail} from "lucide-react"
import { useAuthStore } from '../store/useAuthstore';

const Login = () => {
    const [showpassword,setShowpassword]=useState(false);
    const [formdata ,setFormData]=useState({
      email:"",
      password:"",
    })
    const {login ,isloggingIN} = useAuthStore();

    const handlesubmit= async (e)=>{

      e.preventDefault();
      login(formdata);
      

    }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgb(32, 31, 31)' }}>
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-50">Login</h2>
        <form onSubmit={handlesubmit} className="space-y-6">
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
                  onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
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
                  placeholder='••••••••'
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
            <button type="submit" className="btn text-gray-50 btn-primary w-full bg-gray-500 hover:bg-red-600 py-2.5 rounded-[8px] " disabled={isloggingIN}>
              {isloggingIN ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Login "
              )}
            </button>
          </form>
          <div className='flex justify-center gap-3 text-gray-500 mt-4 items-center'>
          <span>Do not Have Accout ?</span>
          <NavLink className="text-red-600" to="/signup">Signup</NavLink>
          </div>


      </div>
    </div>
  );
};

export default Login
