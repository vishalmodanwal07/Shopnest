import React from 'react'
import { useState } from 'react';
import { AiFillSmile } from "react-icons/ai";
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {getAuth , signInWithEmailAndPassword} from "firebase/auth";
import {app} from './firebase'


const auth = getAuth(app);


function Signin() {
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const signinUser =()=>{
    signInWithEmailAndPassword(auth , email ,password);
    }
  

  return (
    <div>
           <div className=" flex flex-col gap-0  text-black">
       <div className="flex mt-8 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-4">
          <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white  "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Sign-In</h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8 '/>
         </div>
       </div>

      <div className="flex items-center justify-center px-4  sm:px-6 sm:py-16 lg:px-8 lg:py-10  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md  bg-white dark:bg-gray-800 text-black dark:text-white p-4">
 
          <h2 className="text-center text-2xl font-bold leading-tight text-black  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
            Don&apos;t have an account?{' '}
            <NavLink to="/Signup">
             
             <span className="font-medium text-black transition-all duration-200 hover:underline  bg-white dark:bg-gray-800 text-black dark:text-blue-700  bg-white dark:bg-gray-800 text-black dark:text-white "style={{ fontFamily: '"Raleway", sans-serif' }}
             >Sign Up</span>
            
           </NavLink>
          </p>
          <form action="#" method="POST" className="mt-8  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
            <div className="space-y-5  bg-white dark:bg-gray-800 text-black dark:text-white ">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  bg-white dark:bg-gray-800 text-black dark:text-white "
                    type="email"
                    value={email}
                    placeholder="Email"
                    required
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <label htmlFor="" className="text-base font-medium text-gray-900  bg-white dark:bg-gray-800 text-black dark:text-white " style={{ fontFamily: '"Raleway", sans-serif' }}>
                    {' '}
                    Password{' '}
                  </label>
                 
                </div>
                <div className="mt-2  bg-white dark:bg-gray-800 text-black dark:text-white ">
                  <input
                   onChange={(e)=>setPassword(e.target.value)}
                   value={password}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  bg-white dark:bg-gray-800 text-black dark:text-white "style={{ fontFamily: '"Raleway", sans-serif' }}
                    type="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
              </div>
              <div>
                <button
                  onClick={signinUser}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Sign In<ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Signin
