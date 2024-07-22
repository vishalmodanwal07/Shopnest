import React from 'react'
import { AiFillSkype } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';




function Navbar() {
    return (
        <>
        <div className="h-5 flex justify-between p-10 bg-black  item centre text-white w-full">
            <div className="flex text-5xl font-bold ml-15  items-center mb-10">
              <NavLink to="/">
              <div className='flex font-bold  '>
                    <AiFillSkype className='hover:text-yellow-300' />
                    <h1 className='text-blue-700 text-4xl'>HOPNEST</h1>
               </div>
              </NavLink>
            </div>
            <div className='flex items-center gap-10 text-2xl font-medium mr-10'>
               <NavLink to="/">
                  <p className='hover:text-green-500'>Home</p>
               </NavLink>
                <NavLink to="/Cart">
                <div>
                    < FaCartShopping className='hover:text-green-500'/>
                </div>
                </NavLink>
                <NavLink to="Aboutus">
                    <p className='hover:text-green-500'>About-Us</p>
                </NavLink>
               
            </div>
          
        </div>
        </>
      )
}

export default Navbar
