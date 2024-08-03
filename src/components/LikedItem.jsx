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
import { lremove } from "./redux/Slices/LikedSlice"; // Correct import statement for lremove

const LikedItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromLike = () => {
    dispatch(lremove(item.id));
  };

  return (
    <div className="liked-item-container p-4 border border-gray-200 rounded-md flex items-center justify-between mb-4">
      <div className="item-details flex items-center">
        <div className="item-image mr-4">
          <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
        </div>
        <div className="item-info">
          <h1 className="font-bold text-lg">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="item-actions flex items-center">
        <div className="item-price text-lg font-semibold mr-4">${item.price}</div>
        <div onClick={removeFromLike} className="remove-icon cursor-pointer">
          <MdDeleteSweep onClick={removeFromLike} className="text-2xl text-red-500 hover:text-red-700 transition duration-200" />
        </div>
      </div>
    </div>
  );
};

export default LikedItem;
