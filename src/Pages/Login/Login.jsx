import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc'; 
import Logo from "../../assets/green-connect.png"
import GreenContext from '../../Context/GreenContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {googleLogin,errorMessage,setErrorMessage}=use(GreenContext)
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login successful!')
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message)
        toast.error(errorMessage)
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white  rounded-lg shadow-md overflow-hidden">
        <div className="bg-accent p-6 text-center">
          <img 
            src={Logo}
            alt="Green Connect Logo"
            className="h-16 mx-auto mb-2" 
          />
          <h2 className="text-xl font-bold text-white">Welcome Back</h2>
          <p className="text-white">Connect with your gardening community</p>
        </div>

        <div className="p-6">

          <button
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors mb-4"
          >
            <FcGoogle  className="text-2xl" />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-bold">
                Email <span className='text-red-400'>*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder=""
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2 font-bold">
                Password <span className='text-red-400'>*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-[#3e8e41] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
             Log In
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
            <p className="mt-2 text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-primary font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;