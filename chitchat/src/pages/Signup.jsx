import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from '../store/useAuthstore';
import { Eye, EyeOff, Loader2, Mail, MessageSquare, User2 } from "lucide-react"
import toast from "react-hot-toast";

const Signup = () => {

  const [showpassword, setShowpassword] = useState("");
  const [formdata, setFormData] = useState({
    Fullname: "",
    email: "",
    password: ""
  });

  const { Signup, isSignup } = useAuthStore();

  const navigate = useNavigate();

  const validateform = () => {
    if (!formdata.Fullname.trim()) return toast.error("Full name is required ")
    if (!formdata.email.trim()) return toast.error("Email is required ")
    if (!/\S+@\S+\.\S+/.test(formdata.email)) return toast.error("Invalid email format");
    if (!formdata.password.trim()) return toast.error("Password  is required ")
    if (formdata.password.length < 6) return toast.error("Length of a password Should be greater than 6 ")

    return true;




  }

  const handlesubmit = async (e) => {
    e.preventDefault(); 

    const valid = validateform();
    if (valid === true) {
      try {
        await Signup(formdata);
        toast.success("Signup successful!");
        console.log('signup succesfull');
        
        navigate("/");
      } catch (error) {
        console.log('signup not succesfull');

        toast.error("Signup failed!");
      }
    }
  }



  return (
    <>
      <div className="signupbg   flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto flex flex-col items-center justify-center sm:w-full sm:max-w-sm">
          <MessageSquare className='text-gray-50 size-10' />

          <h2 className="mt-10 text-gray-50 text-center text-2xl/9 font-bold tracking-tight ">
            Sign up  to your account
          </h2>
        </div>

        <div className="mt-10 shadow-2xl shadow-black sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} className="space-y-6">
            <div className='relative'>
              <label htmlFor="email" className="  block text-sm/6 font-medium text-gray-50">
                Full name
              </label>
              <User2 className=' absolute text-gray-500 mt-3.5 mx-2.5 text-base-content-40'></User2>
              <div className="mt-2">
                <input
                  id="Fullname"
                  name="Fullname"
                  type="Fullname"
                  required
                  autoComplete="Fullname"
                  className="block w-full rounded-md bg-gray-300 px-9 py-1.5 text-base  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                  onChange={(e) => setFormData({ ...formdata, Fullname: e.target.value })}
                />

              </div>
            </div>
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
            <button type="submit" className="btn text-gray-50 btn-primary w-full bg-gray-500 hover:bg-red-600 py-2.5 rounded-[8px] " disabled={isSignup}>
              {isSignup ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

        </div>
        <div className='flex justify-center gap-3.5 text-center'>
          <p className="mt-10 text-center text-sm/6 text-gray-50">
            Already have a Account?{' '}

          </p>
          <NavLink className='text-red-600 mt-10 justify-center' to="/login" > sign in</NavLink>
        </div>


      </div>
    </>
  )
}

export default Signup