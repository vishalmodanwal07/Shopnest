import React from 'react'
import { AiFillSmile } from "react-icons/ai";
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebase'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from './firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

function Signup() {
    const [email ,setEmail]=useState("");
    const [password , setPassword]=useState("");
    const [name , setName]=useState("");
    const auth = getAuth(app);
    const signup = async () => {
      try {
        if(name ==="" || email==="" || password==="" ){
          toast.error("All Fields are required");
        }
      const users  =  await createUserWithEmailAndPassword(auth, email, password);
        const user ={
          name: name ,
          uid: users.user.uid,
          email :users.user.email,
          time : Timestamp.now()
        }
        const userRef =collection(db , "users");
        await addDoc(userRef , user);
        setName("");
        setEmail("");
        setPassword("");
        toast.success("signup successfully");
        
        // Handle successful registration
      } catch (error) {
        console.error(error);
      }
    };
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
            >Sign In</span>
           
          </NavLink>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  {' '}
                  Name{' '}
                </label>
                <div className="mt-2  bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  <input
                    onChange={(e)=>setName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={name}
                    placeholder="Name"
                    id="name"
                  ></input>
                </div>
                
              </div>
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
                  onClick={signup}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form> 
        </div>
      </div>
   </div>
  )
}

export default Signup;
