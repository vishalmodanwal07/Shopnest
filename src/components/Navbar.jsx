import React, { useState } from 'react';
import { RxMagicWand } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "./redux/Slices/authSlice";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import ThemeToggle from "./ThemeToggle";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { toast } from "react-toastify";

function Navbar() {
  const { cart, like } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu
  const auth = getAuth(app);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(clearUser());
      toast.success("Logged out");
    }).catch((error) => {
      console.error("Sign-out error", error);
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-md z-20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <h1 className="text-3xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition duration-300" style={{ fontFamily: '"Pacifico", cursive' }}>
              SHOPNEST
            </h1>
            <RxMagicWand className="text-yellow-400 text-xl animate-bounce ml-2" />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className="flex items-center space-x-1 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <RiHome2Fill className="text-3xl" />
            <p className="font-semibold text-2xl">Home</p>
          </NavLink>
          <NavLink to="/Cart" className="relative flex items-center space-x-1 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <FaCartShopping className="text-3xl" />
            {cart.length > 0 && (
              <span className=" top-0 right-0 text-xs font-semibold bg-red-600 text-white rounded-full px-2 py-0.5 animate-bounce">{cart.length}</span>
            )}
            <p className="font-semibold text-2xl">Cart</p>
          </NavLink>
          <NavLink to="/Favourite" className="relative flex items-center space-x-1 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <IoHeartSharp className="text-3xl text-red-600" />
            {like.length > 0 && (
              <span className=" top-0 right-0 text-xs font-semibold bg-red-600 text-white rounded-full px-2 py-0.5 animate-bounce">{like.length}</span>
            )}
            <p className="font-semibold text-2xl">Favourites</p>
          </NavLink>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-rose-500">{user.email}</span>
              <button
                onClick={handleSignOut}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 dark:hover:bg-green-500 focus:outline-none"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="text-lg font-bold">User</MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <MenuItem>
                    <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign In</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign Up</Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          )}
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-16 bg-white dark:bg-gray-800 text-black dark:text-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center p-4 space-y-2">
          <NavLink to="/" className="w-full py-2 text-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</NavLink>
          <NavLink to="/Cart" className="relative w-full py-2 text-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Cart
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold bg-red-600 text-white rounded-full px-2 py-0.5">{cart.length}</span>
            )}
          </NavLink>
          <NavLink to="/Favourite" className="relative w-full py-2 text-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Favourites
            {like.length > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold bg-red-600 text-white rounded-full px-2 py-0.5">{like.length}</span>
            )}
          </NavLink>
          {user ? (
            <div className="text-center">
              <span className="text-rose-500">{user.email}</span>
              <button
                onClick={handleSignOut}
                type="button"
                className="mt-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 dark:hover:bg-green-500 focus:outline-none"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="text-lg font-bold">User</MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <MenuItem>
                    <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign In</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign Up</Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
