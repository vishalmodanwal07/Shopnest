
import React from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { lremove } from './redux/Slices/LikedSlice';// Correct import statement for lremove
import { toast } from 'react-toastify';


const LikedItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromLike = () => {
    dispatch(lremove(item.id));
    toast("Item removed from Liked");
  };
  return (
    <div className=" ml-10 p-4  border-b-4 w-[40%] border-gray-300 rounded-lg  mb-6 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-110 transition duration-300 ease-in  " style={{ fontFamily: '"Raleway", sans-serif' }} >
      <div>
        <div>
          <h1 className="font-bold text-lg flex items-center justify-center ">{item.title}</h1>
          <div className="flex justify-center items-center p-3  hover:scale-110 transition duration-300 ease-in ">
            <img src={item.image} alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md" />
          </div>
        </div>
         <div>
          <p className=" flex items-center justify-center ">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
        </div>
        <div className="flex justify-between px-3 mx-5 gap-10 py-3">
          <div className="item-price text-lg font-semibold  text-green-500">${item.price}</div>
        <div onClick={removeFromLike} className="remove-icon cursor-pointer">
            <MdDeleteSweep className="text-4xl text-red-500 hover:text-red-700 transition duration-200 rounded-full bg-black p-1 " />
        </div>
        </div>
      </div>

    </div>
  );
};

export default LikedItem;
