// import { RxMagicWand } from "react-icons/rx";
// import { FaCartShopping } from "react-icons/fa6";
// import { NavLink } from 'react-router-dom';
// import { RiHome2Fill } from "react-icons/ri";
// import { IoHeartSharp } from "react-icons/io5";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const { cart } = useSelector((state) => state);
//   const { like } = useSelector((state) => state);

//   return (
//     <>
//       <div className="h-8 flex fixed justify-between mx-auto bg-white p-10 items-center text-black w-full">
//         <div className="flex justify-center items-center text-5xl font-semibold ml-15 max-w-6xl mb-10">
//           <NavLink to="/">
//             <div className='flex font-semibold items-center'>
//               <h1 className='text-gray-800 text-4xl ml-5 flex hover:text-black shadow-sm' style={{ fontFamily: '"Pacifico" , cursive' }}>SHOPNEST</h1>
//               <RxMagicWand className='text-yellow-400 size-6 animate-bounce' />
//             </div>
//           </NavLink>
//         </div>

//         <div className='flex items-center gap-2 font-sans mr-5'>
//           <div className="flex ">
//             <input
//               className="flex h-10 p-5 mt-2  lg:block md:hidden sm:hidden hidden shadow-md bg-blue-100 rounded-md border w-60 border-gray-300 mb-1 px-3 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//               type="text"
//               placeholder="Search For Products....">
//             </input>
//           </div>
//         </div>
        
//         <div className='flex items-center'>
//           <NavLink to="/"
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
//             }>
//             <div className='flex items-center gap-2 justify-center hover:text-blue-600'>
//               <RiHome2Fill className='size-7' />
//               <p className='text-lg font-bold xs:hidden sm:block md:block lg:block xl:block ' style={{ fontFamily: '"Raleway", sans-serif' }}>Home</p> {/* Show on sm, hide on md */}
//             </div>
//           </NavLink>

//           <NavLink to="/Cart"
//             className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
//             }>
//             <div className='flex items-center gap-2 justify-center hover:text-blue-600'>
//               <div className="flex justify-center items-center">
//                 <FaCartShopping className='size-7' />
//                 {
//                   cart.length > 0 &&
//                   <span className="text-white border-50% bg-red-600 text-xs w-4 h-4 flex justify-center item-centre animate-bounce rounded-full">{cart.length}</span>
//                 }
//                 <p className='text-lg font-bold xs:hidden sm:block md:block lg:block xl:block' style={{ fontFamily: '"Raleway", sans-serif' }}>Cart</p> {/* Show on md, hide on lg */}
//               </div>
//             </div>
//           </NavLink>

//           <NavLink to="Favourite"
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600 border-b-2 border-gray-400" : "text-white-300"}`
//             } >
//             <div className='flex items-center relative justify-center hover:text-blue-600'>
//               <IoHeartSharp className='text-red-600 size-7' />
//               {
//                 like.length > 0 &&
//                 <span className="text-white border-50% bg-red-600 text-xs h-3 w-3 flex justify-center item-centre m-2 p-2 animate-bounce rounded-full">{like.length}</span>
//               }
//               <p className='text-lg font-bold xs:hidden sm:block md:block lg:block xl:block' style={{ fontFamily: '"Raleway", sans-serif' }}>Favourites</p> {/* Show on lg, hide on xl */}
//             </div>
//           </NavLink>
//           <button
//             type="button"
//             className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 xs:hidden sm:block md:hidden lg:block xl:block"
//             style={{ fontFamily: '"Raleway", sans-serif' }}
//           >
//             Login
//           </button> {/* Show only on xl */}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar;
import { RxMagicWand } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const { cart } = useSelector((state) => state);
  const { like } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  return (
    <>
      <div className="h-16 flex fixed justify-between mx-auto bg-white p-4 items-center text-black w-full z-10">
        <div className="flex justify-center items-center text-5xl font-semibold">
          <NavLink to="/">
            <div className='flex font-semibold items-center'>
              <h1 className='text-gray-800 text-4xl ml-5 flex hover:text-black shadow-sm' style={{ fontFamily: '"Pacifico" , cursive' }}>SHOPNEST</h1>
              <RxMagicWand className='text-yellow-400 size-6 animate-bounce' />
            </div>
          </NavLink>
        </div>

        <div className='hidden md:flex items-center gap-2 font-sans'>
          <div className="flex">
            <input
              className="flex h-10 p-5 mt-2 shadow-md bg-blue-100 rounded-md border w-60 border-gray-300 mb-1 px-3 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search For Products....">
            </input>
          </div>
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
              <IoHeartSharp className='text-red-600 size-7' />
              {
                like.length > 0 &&
                <span className="text-white border-50% bg-red-600 text-xs h-3 w-3 flex justify-center items-center m-2 p-2 animate-bounce rounded-full">{like.length}</span>
              }
              <p className='text-lg font-bold' style={{ fontFamily: '"Raleway", sans-serif' }}>Favourites</p>
            </div>
          </NavLink>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ fontFamily: '"Raleway", sans-serif' }}
          >
            Login
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
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
      </div>

      {isOpen && (
        <div className="md:hidden bg-white fixed w-full top-16 left-0 z-50">
          <div className="flex flex-col items-center p-4">
            <NavLink to="/" className="py-2 text-gray-800 hover:text-blue-600 w-full text-center">Home</NavLink>
            <NavLink to="/Cart" className="py-2 text-gray-800 hover:text-blue-600 w-full text-center">Cart</NavLink>
            <NavLink to="/Favourite" className="py-2 text-gray-800 hover:text-blue-600 w-full text-center">Favourites</NavLink>
            <input
              className="flex h-10 p-5 mt-2 shadow-md bg-blue-100 rounded-md border w-full border-gray-300 mb-1 px-3 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search For Products....">
            </input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full mt-2"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
