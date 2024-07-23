
import { RxMagicWand } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FiSearch } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";




function Navbar() {
  
    return (
        <>
        <div className="h-5 flex justify-between p-10 bg-white item centre text-black w-full">
            <div className="flex text-5xl font-semibold ml-15  items-center mb-10">
              <NavLink to="/">
              <div className='flex font-semibold items-center '>
                    <h1 className='text-blue-800 text-4xl flex '
                     style={{fontFamily:'"Caveat", cursive'}}>SHOPNEST</h1>
                    <RxMagicWand className='text-yellow-300 size-7'/>
              </div>
              </NavLink>
             </div>

            <div className='flex items-center gap-5 text-2xl font-sans mr-5'>
            <div className='flex items-center'>
               <TextField
                  label="Search"
                  placeholder='search for products'
                  type="search"
                  variant="standard"
                 />
                 <FiSearch className='hover:text-blue-500'/>
               </div>

               
               <NavLink to="/Cart"
                    className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-600 border-b-2 border-gray-400" : "text-white-300"}  `
                }>
                <div className='flex items-center gap-3 justify-center'>
                    < FaCartShopping className='hover:text-red-600'/>
                     <p className='text-2xl ' style={{fontFamily:'"Raleway", sans-serif'}}>Cart</p>
                </div>
               </NavLink>
                
               <NavLink to="/"
                 className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-red-600 border-b-2 border-gray-400" : "text-white-300"}  `
                }>
                  <div  className='flex items-center gap-3 justify-center '>
                     <RiHome2Fill className='hover:text-red-600'/> 
                     <p className='text-2xl' style={{fontFamily:'"Raleway", sans-serif'}}>Home</p>   
                  </div>
               </NavLink>

                <NavLink to="Aboutus" 
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-600  border-b-2 border-gray-400" : "text-white-300"} `
                } >  
                    <div  className='flex items-center gap-3 justify-center '>
                        <FcAbout className='hover:text-red-600'/>
                        <p className='text-2xl' style={{fontFamily:'"Raleway", sans-serif'}}>About-Us</p>
                    </div> 
               </NavLink>

             </div>
          
        </div>
        </>
      )
}

export default Navbar
