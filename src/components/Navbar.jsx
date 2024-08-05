
import { RxMagicWand } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "./redux/Slices/authSlice";
import { signOut } from "firebase/auth";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { toast } from "react-toastify";

function Navbar() {
  const { cart } = useSelector((state) => state);
  const { like } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const auth =getAuth(app);
  const user =useSelector((state)=>state.auth.user);
  const dispatch = useDispatch();
  

  const handleSignOut = () => {
   signOut(auth).then(() => {
     dispatch(clearUser());   
     toast.success("log out"); 
   }).catch((error) => {
     console.error("Sign-out error", error);
   });
 };

  return (
    <>
      <div className="h-16 flex fixed justify-between shadow-lg mx-auto items-center w-full z-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4">
        <div className="flex justify-center items-center text-5xl font-semibold">
         <NavLink to="/">
          <div className="flex items-center">
          <div className='flex font-semibold items-center'>
          <h1 className='text-4xl ml-5 flex hover:text-black  bg-white dark:bg-gray-800 text-black dark:text-white m-4 ' style={{ fontFamily: '"Pacifico" , cursive' }}>SHOPNEST</h1>
          <RxMagicWand className='text-yellow-400 size-6 animate-bounce' />
          </div>
          <div className="sm:block lg:hideen md:hidden xl:hidden p-2 ml-3 font-sm text-sm">
              <ThemeToggle/>
          </div>
          </div>
        </NavLink>
        </div>

        <div className='hidden md:flex items-center'>
          <NavLink to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
            }>
            <div className='flex items-center gap-2 justify-center hover:text-blue-600'>
              <RiHome2Fill className='size-7' />
              <p className='text-lg font-bold' style={{ fontFamily: '"Raleway", sans-serif' }}>Home</p>
            </div>
          </NavLink>

          <NavLink to="/Cart"
            className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
            }>
            <div className='flex items-center gap-2 justify-center hover:text-blue-600'>
              <div className="flex justify-center items-center">
                <FaCartShopping className='size-7' />
                {
                  cart.length > 0 &&
                  <span className="text-white border-50% bg-red-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full">{cart.length}</span>
                }
                <p className='text-lg font-bold' style={{ fontFamily: '"Raleway", sans-serif' }}>Cart</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Favourite"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
            }>
            <div className='flex items-center relative justify-center hover:text-blue-600'>
              <IoHeartSharp className='text-red-600 size-8' />
              {
                like.length > 0 &&
                <span className="text-white border-50% bg-red-600 text-xs h-3 w-3 flex justify-center items-center  p-2 animate-bounce rounded-full">{like.length}</span>
              }
              <p className='text-lg font-bold' style={{ fontFamily: '"Raleway", sans-serif' }}>Favourites</p>
            </div>
          </NavLink>
          {user ? (
          <div>
            <span className="text-rose-500"style={{ fontFamily: '"Raleway", sans-serif' }}>{ user.email}</span>
            <button
               onClick={handleSignOut}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              style={{fontFamily:'"Raleway", sans-serif'}} >SIGN OUT </button>
          </div>)
          : (
          <div className="dropdown">
            <button onClick={toggleDropdown} className="font-bold text-lg" style={{ fontFamily: '"Raleway", sans-serif' }}>User</button>
            {dropdownOpen && (
               <Menu as="div" className="relative inline-block text-left">
                 <div>
                 <MenuButton className="inline-flex  w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black hover:text-white">
                  Account</MenuButton>
                 </div>
                 <MenuItems
                 transition
                 className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                 <div className="py-1">
                  <MenuItem>
                   <Link to="/signin"  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={() => setDropdownOpen(false)}>Sign In</Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={() => setDropdownOpen(false)}>Sign Up</Link>
                  </MenuItem>
                 </div>  
              </MenuItems>
            </Menu>)}
        </div>
        )}


        <ThemeToggle/>
        </div>

        <div className="md:block  lg:hidden flex items-center  bg-white dark:bg-gray-800 text-black dark:text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6  bg-gray-500 dark:bg-gray-800 text-black dark:text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6  bg-white dark:bg-gray-800 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed w-full top-16 left-0 z-50  bg-white dark:bg-gray-800 text-black dark:text-white ">
          <div className="flex flex-col items-center p-4  bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
            <NavLink to="/" className="py-2  hover:text-blue-600 w-full text-center  bg-gray-300 dark:bg-gray-800 text-black dark:text-white">Home</NavLink>
            <NavLink to="/Cart" className="py-2 flex items-center justify-center  hover:text-blue-600 w-full text-center  bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
            <div className=" bg-gray-300 dark:bg-gray-800 text-black dark:text-white"> Cart </div>
            {
                cart.length > 0 &&
                <span className="text-white border-50% bg-red-600 text-xs h-3 w-3 flex justify-center items-center m-2 p-2 animate-bounce rounded-full ">{cart.length}</span>
              }
            </NavLink>
            <NavLink to="/Favourite" className="py-2 flex items-center justify-center hover:text-blue-600 w-full text-center   bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
            <div className="  bg-gray-300 dark:bg-gray-800 text-black dark:text-white"> Favourite </div>
            {
                like.length > 0 &&
                <span className="text-white border-50% bg-red-600 text-xs h-3 w-3 flex justify-center items-center m-2 p-2 animate-bounce rounded-full ">{like.length}</span>
              }
            </NavLink>
         
           
          <NavLink to="/Signup">
          {user ? (
          <div className="pl-2 ml-2">
            <div className="text-rose-500 mt-2"style={{ fontFamily: '"Raleway", sans-serif' }}>{ user.email}</div>
            <button 
             onClick={handleSignOut}
              type="button"
              className="rounded-md bg-black px-3 py-2 ml-5 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              style={{fontFamily:'"Raleway", sans-serif'}} >SIGN OUT </button>
          </div>
        ) : (
          <div className="dropdown">
            <Menu as="div" className="relative inline-block text-centre">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Account
    
                </MenuButton>
              </div>
        
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                   <Link to="/signin"  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={() => setDropdownOpen(false)}>Sign In</Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={() => setDropdownOpen(false)}>Sign Up</Link>
                  </MenuItem>
                </div>  
              </MenuItems>
            </Menu>
            
          </div>
        )}


         
          </NavLink>
           
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
