import React from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { lremove } from './redux/Slices/LikedSlice'; // Correct import statement for lremove
import { toast } from 'react-toastify';

const LikedItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromLike = () => {
    dispatch(lremove(item.id));
    toast("Item removed from Liked");
  };

  return (
    <div className="mx-auto my-4 p-4 border-b-4 border-gray-300  rounded-lg  hover:scale-105 transition-transform duration-300 ease-in-out max-w-sm sm:max-w-md lg:max-w-lg w-full shadow-[rgba(7,_65,_210,_0.1)_20px_20px_30px]">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-lg text-center mb-2">{item.title}</h1>
        <div className="flex justify-center items-center p-2 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img 
            src={item.image} 
            alt={item.title} 
            className="h-48 w-full object-cover rounded-md" 
          />
        </div>
        <p className="mt-2 text-center text-sm sm:text-base">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="text-lg font-semibold mx-10 text-green-500">
            ${item.price}
          </div>
          <div onClick={removeFromLike} className="cursor-pointer">
            <MdDeleteSweep className="text-2xl sm:text-3xl mx-10 text-red-500 hover:text-red-700 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedItem;
