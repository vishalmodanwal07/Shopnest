import React from 'react'
import { AiFillSkype } from "react-icons/ai";


function Navbar() {
    return (
        <><div className="h-20 flex p-10 bg-black  item centre text-white w-full">
            <div className="flex text-5xl font-bold ml-15  items-center mb-10">
                <div className='flex font-bold  '>
                    <AiFillSkype />
                    <h1 className='text-blue-700 text-4xl'>HOPNEST</h1>
                    
                </div>
            </div>
          
        </div>
        </>
      )
}

export default Navbar
