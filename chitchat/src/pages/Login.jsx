import { LogIn } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgb(32, 31, 31)' }}>
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-50">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-50 mb-2">Username</label>
            <input
              type="text"
              className="w-full bg-gray-300 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-50 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-300 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Log In
          </button>
          <div className='mt-4 flex justify-start gap-3.5 '>
            <p className='text-gray-50'>Do not Have Account ?</p>
          <NavLink className='text-red-600' to='/signup'>signup </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
