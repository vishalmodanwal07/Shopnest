import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Contact } from 'lucide-react';
import Contactus from './Contactus';

function Layout() {
    const theme = useSelector((state) => state.theme);
    useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);
  return (
    <div>
        <div className="flex flex-col max-w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <main className="flex-grow pt-10  bg-white dark:bg-gray-800 text-black dark:text-white p-4">
        <Outlet />
      </main>
        <Contactus/>
        <Footer />
    </div>
    </div>
  )
}

export default Layout;
