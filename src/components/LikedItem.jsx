// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { MdDeleteSweep } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { lremove } from "./redux/Slices/LikedSlice";
// import {like} 




// const LikedItem = ({item}) => {
//   const {like} = useSelector((state) => state);
//     const dispatch =useDispatch();
//     const removeFromLike = () => {
//         dispatch(lremove(item.id));
       
//     };
//     return (
//       <div>
//           <div>
//             <div>
//                 <img src={item.image}/>
//             </div>
//             <div>
//               <h1>{item.title}</h1>
//               <h1>{item.description}</h1>
//             </div>
//             <div>{item.price}</div>
//            <div   onClick={removeFromLike}>
//            <MdDeleteSweep   className="size-8" />
//            </div>
  
//           </div>
         
//       </div>
//     )
//   }
  
//   export default LikedItem;
  

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { lremove } from './redux/Slices/LikedSlice';// Correct import statement for lremove
import { toast } from 'react-toastify';


const LikedItem = ({ item  ,post, itemIndex}) => {
  const {cart} = useSelector((state) => state);
 
  const dispatch = useDispatch();
  const removeFromLike = () => {
    dispatch(lremove(item.id));
    toast("Item removed from Liked");
};


  return (
    <div  className=" ml-10 p-4  border-b-4 w-[40%] border-gray-300 rounded-lg  mb-6 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-110 transition duration-300 ease-in  " style={{ fontFamily: '"Raleway", sans-serif' }} >
      <div>
          <div>
          <h1 className="font-bold text-lg flex items-center justify-center ">{item.title}</h1>
          <div className="flex justify-center items-center p-3  hover:scale-110 transition duration-300 ease-in ">
          <img src={item.image} alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md" />
          </div>
          </div>
        
        
         <div>
          <p  className=" flex items-center justify-center ">{item.description.split(" ").slice(0,20).join(" ")+"..."}</p>
         </div>
         

         <div className="flex justify-between items-center mx-10 py-3">
        <div className="item-price text-lg font-semibold mr-4 text-green-500">${item.price}</div>
       
        <div  onClick={ removeFromLike} className="remove-icon cursor-pointer">
          <MdDeleteSweep  className="text-4xl text-red-500 hover:text-red-700 transition duration-200 rounded-full bg-black p-1 " />
        </div>
      </div>
   </div>
    
    </div>
  );
};

export default LikedItem;
