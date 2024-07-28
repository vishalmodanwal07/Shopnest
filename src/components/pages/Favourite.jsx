import React from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

function Favourite() {

  const {like }= useSelector((state)=>state);
  return (
    <div>
         <div className=" flex flex-col gap-0  text-black">
         <div className="flex mt-20 text-5xl items-center justify-center">
         <h1 className="text-3xl  font-bold pl-10 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Your  <span className="text-white ">Favourites</span></h1>
          <IoHeartSharp className='text-red-400  hover:text-red-600 size-8'/>
         </div>
       </div>
      
       <div>
        {
          like.length > 0 ?
          (<div>
            <div>
              {
                like.map((item, index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
         </div>):
          (<div className="flex justify-centre item centre">
            <h1>No Liked products..</h1>
            <Link to={"/"} >
            <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        style={{fontFamily:'"Raleway", sans-serif'}}
      >
        EXPLORE MORE
      </button>
            </Link>
          </div>
            
          )
        }
       </div>

          
        
     </div>
    

  )
}

export default Favourite;

