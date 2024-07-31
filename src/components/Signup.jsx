import React from 'react'
import { AiFillSmile } from "react-icons/ai";
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebase'
import { NavLink } from 'react-router-dom';




function Signup() {
    const [email ,setEmail]=useState("");
    const [password , setPassword]=useState("");
    const auth = getAuth(app);
    const createUser =()=>{createUserWithEmailAndPassword(auth , email ,password)};
  return (
    <div>
         <div className=" flex flex-col gap-0  text-black">
       <div className="flex mt-5 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-4">
          <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Sign-up</h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8 '/>
         </div>
       </div>



       <div className="flex items-center justify-center px-4  sm:px-6 sm:py-16 lg:px-8 lg:py-10  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
          <div className="mb-2 flex justify-center  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
            Already have an account?{' '}
           <NavLink to="/Signin">
             
            <span className="font-medium text-black transition-all duration-200 hover:underline  bg-white dark:bg-gray-800 text-black dark:text-blue-700"style={{ fontFamily: '"Raleway", sans-serif' }}
            >Sing In</span>
           
          </NavLink>
            {/* <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline  bg-white dark:bg-gray-800 text-black dark:text-blue-700"style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Sign In
            </a> */}
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    value={email}
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <label htmlFor="password" className="text-base font-medium text-gray-900  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <input
                    onChange={(e)=>setPassword(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" style={{ fontFamily: '"Raleway", sans-serif' }}
                    type="password"
                    value={password}
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  onClick={createUser}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
          <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              <span className="mr-2 inline-block  bg-white dark:bg-gray-800 text-black dark:text-white ">
                <svg
                  className="h-6 w-6 text-rose-500  bg-white dark:bg-gray-800  dark:text-white "
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            
           
          </div>
        </div>
      </div>
    

      



    </div>
  )
}

export default Signup;
