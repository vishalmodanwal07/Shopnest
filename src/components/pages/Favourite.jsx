import React from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LikedItem from '../LikedItem';


function Favourite() {

  const {like }= useSelector((state)=>state);
  return (
    <div>
         <div className=" flex flex-col h-10 gap-0 mb-20  bg-white dark:bg-gray-800 text-black dark:text-white p-4">
         <div className="flex mt-5 ml-3 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white ">
         <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white  "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> <span className="text-green-500 p-2">Your</span>Favourites</h1>
          <IoHeartSharp className='text-red-600  animate-bounce size-8'/>
         </div>
       </div>
      
       <div className=" flex justify-center items-center bg-white  dark:bg-gray-800 text-black dark:text-white">
        {
          like.length > 0 ?
          (<div >
            <div className='flex justify-center items-center'>
              {
                like.map((item, index)=>{
                  return <LikedItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            
         </div>):
         ( <div>
          <div className="flex justify-center  bg-gray-300 items-center  m-10 h-40 w-80 border-collapse shadow-[0_15px_40px_rgba(8,_112,_184,_0.7)] border-gray-500 rounded-xl  text-black dark:text-white p-4">
          <p className="flex justify-center items-center font-semibold" style={{ fontFamily: '"Raleway", sans-serif' }}>No Liked Products. Keep Explore Home Page.</p>
         </div>
         <div className="flex items-center justify-center"> <Link to={"/"} >
          <button
           type="button"
           className="rounded-md bg-black px-3 py-2 m-5 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
           style={{fontFamily:'"Raleway", sans-serif'}} >HOME </button>
          </Link></div>
         




</div>

)

        }
       </div>

          
        
     </div>
    

  )
}

export default Favourite;

